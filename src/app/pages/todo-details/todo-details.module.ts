// Kristofer McCormick 1803203 & Oleksandr Zakirov 1802341

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodoDetailsPage } from './todo-details.page';
import { NgCircleProgressModule } from 'ng-circle-progress';



const routes: Routes = [
  {
    path: '',
    component: TodoDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoDetailsPage
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
  declarations: [TodoDetailsPage]
})
export class TodoDetailsPageModule {}
