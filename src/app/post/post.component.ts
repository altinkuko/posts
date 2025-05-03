import { Component } from '@angular/core';
import {Post} from "../../../../../medical_center_fe/src/app/data/post";
import {PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post:Post = {id:0, title:'', body:'', userId:0};
  constructor(private postService: PostService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.postService.getPost(params['id']).subscribe({
        next: (res) => {
          this.post = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }
}
