import { Component, OnInit } from "@angular/core";

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostService) {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    })
  }

  ngOnInit() {

  }


}
