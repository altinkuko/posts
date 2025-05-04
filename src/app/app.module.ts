import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostComponent} from './post/post.component';
import {PostsComponent} from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    TodoitemComponent,
    ToDoListComponent,
    PersonFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
