import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Required by angular2-jwt
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

// Fix design flaw in ngmodule involving input date in forms
import {CallbackComponent} from './callback/callback.component';

import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { // Required by angular2-jwt
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    PageNotFoundComponent,
    CallbackComponent
  ]
})
export class SharedModule {
}
