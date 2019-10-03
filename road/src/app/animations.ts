import { trigger, transition, animate, style, state } from '@angular/animations';

export let fade =    trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [ //void <=> *
      // style({opacity: 0}), define in state at one time
      animate(2000)
    ]),
  ])