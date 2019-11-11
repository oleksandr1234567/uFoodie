// Kristofer McCormick 1803203 & Oleksandr Zakirov 1802341

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'tikka', loadChildren: './recipes/tikka/tikka.module#TikkaPageModule' },
  { path: 'vindaloo', loadChildren: './recipes/vindaloo/vindaloo.module#VindalooPageModule' },
  { path: 'paneer', loadChildren: './recipes/paneer/paneer.module#PaneerPageModule' },
  { path: 'pizza', loadChildren: './recipes/pizza/pizza.module#PizzaPageModule' },
  { path: 'spaghetti', loadChildren: './recipes/spaghetti/spaghetti.module#SpaghettiPageModule' },
  { path: 'cous', loadChildren: './recipes/cous/cous.module#CousPageModule' },
  { path: 'ftoast', loadChildren: './recipes/ftoast/ftoast.module#FtoastPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
