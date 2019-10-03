import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    register?: boolean;
}

@Injectable({providedIn: 'root'})   
export class authService{

    user = new Subject<User>();

    constructor(private http: HttpClient){}
    signup(email: string, password: string){
       return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAqLSfrAQEhSoL6dOexYqkIfa1H4p_1EGw',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
        .pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(
                resData.email, 
                resData.localId, 
                resData.idToken,  
                +resData.expiresIn
            );
        }));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAqLSfrAQEhSoL6dOexYqkIfa1H4p_1EGw',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        )
        .pipe(catchError(this.handleError), 
            tap(resData => {
                this.handleAuthentication(
                    resData.email, 
                    resData.localId, 
                    resData.idToken,  
                    +resData.expiresIn
                );
            })
        )
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){
        const expirationDate = new Date(
            new Date().getTime() + + expiresIn * 1000
        );
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }

    private handleError( errorRes: HttpErrorResponse){
        let errorMessage = 'An known error occured';
        if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already.';
            break;
            case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email does not exist.';
            break;
            case 'INVALID_PASSWORD':
            errorMessage = 'This password is not correct.';
            break;
        }
        return throwError(errorMessage);
    }
}