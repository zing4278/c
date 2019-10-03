import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWhatComponent } from './info-what.component';

describe('InfoWhatComponent', () => {
  let component: InfoWhatComponent;
  let fixture: ComponentFixture<InfoWhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
