import { Component } from '@angular/core';
import {PostService} from "../post.service";
import {Post} from "../../../../../medical_center_fe/src/app/data/post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: Post[];

  constructor(private postService: PostService,
              private router: Router) {
    this.posts = [];
    this.postService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onSelect(id: number) {
    this.router.navigate(['/post', id]);
  }
}
