import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostComponent} from './post/post.component';
import {PostsComponent} from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    TodoitemComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
