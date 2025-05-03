import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path:'post/:id', component: PostComponent},
  {path: 'todo', component: ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
