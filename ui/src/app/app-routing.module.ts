/**
 * Created by jardiml on 7/05/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './core/login/login.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'students', loadChildren: './student/student.module#StudentModule'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
