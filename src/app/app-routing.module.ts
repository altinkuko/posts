import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {PersonFormComponent} from './person-form/person-form.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path:'post/:id', component: PostComponent},
  {path: 'todo', component: ToDoListComponent},
  {path: 'user', component: PersonFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
