// Kristofer McCormick 1803203 & Oleksandr Zakirov 1802341
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab4Page } from './tab4.page';

import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Tab4Page
      }
    ]),

    // circle progress for timer

    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animation: false,
      responsive: true,
      renderOnClick: false
    }),

  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
