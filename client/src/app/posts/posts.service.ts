import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];

  constructor(
    private http:HttpClient
  ) {}

  getPost() {
    let url = 'http://localhost:3000/api/posts';
    return this.http.get(url);;
  }

  addPost(post: Post) {
    let url = 'http://localhost:3000/api/posts';
    return this.http.post<{message:string}>(url,post)
    // this.posts.push(post);
  }
}
