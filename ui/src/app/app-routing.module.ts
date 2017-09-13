/**
 * Created by jardiml on 7/05/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {CallbackComponent} from './shared/callback/callback.component';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './core/login/login.component';

import {AuthGuardService} from './shared/auth/auth-guard.service';
// canActivate: [AuthGuardService],

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'students', canActivate: [AuthGuardService], loadChildren: './student/student.module#StudentModule'
  },
  {
    path: 'callback', component: CallbackComponent
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
