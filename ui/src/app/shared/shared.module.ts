import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CallbackComponent} from './callback/callback.component';

import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule {
}
