import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    StudentModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
