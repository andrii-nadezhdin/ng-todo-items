import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMePageComponent } from './about-me/about-me-page/about-me-page.component';
import { FormComponent } from './core/forms/form/form.component';
import { FormInputComponent } from './core/forms/form-input/form-input.component';
import { FormButtonComponent } from './core/forms/form-button/form-button.component';
import { TodoPageComponent } from './todos/todo-page/todo-page.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginButtonComponent } from './shared/header/login-button/login-button.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';

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
    LoginButtonComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
