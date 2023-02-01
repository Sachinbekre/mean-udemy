import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/model/Post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  title: string = '';
  content: string = '';

  constructor(private postService: PostsService) {}

  savePost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    const post: Post = {
      title: postForm.value.title,
      content: postForm.value.content,
    };
    this.postService.addPost(post);
    postForm.resetForm();
  }
}
