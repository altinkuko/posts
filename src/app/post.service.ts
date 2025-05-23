import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../../medical_center_fe/src/app/data/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id:number):Observable<Post>{
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
