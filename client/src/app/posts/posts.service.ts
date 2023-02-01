import { Injectable } from '@angular/core';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts:Post[]=[];

  constructor() { }

  getPost(){
    return this.posts;
  }

  addPost(post:any){
    this.posts.push(post);
    console.log(this.posts)
  }
}
