import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  storedPost: Post[] = [];
  constructor(private postService: PostsService) {}
  ngOnInit() {
    this.storedPost = this.postService.getPost();
  }
}
