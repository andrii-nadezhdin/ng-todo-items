import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMePageComponent } from './app/about-me/about-me-page/about-me-page.component';
import { FormComponent } from './forms/form/form.component';
import { FormInputComponent } from './forms/form-input/form-input.component';
import { FormButtonComponent } from './forms/form-button/form-button.component';
import { TodoPageComponent } from './todos/todo-page/todo-page.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { HeaderComponent } from './header/header.component';
import { LoginButtonComponent } from './login-button/login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMePageComponent,
    FormComponent,
    FormInputComponent,
    FormButtonComponent,
    TodoPageComponent,
    TodoListComponent,
    TodoAddComponent,
    HeaderComponent,
    LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
