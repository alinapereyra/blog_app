import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, author: string, content: string) {
    const post: Post = { title: title, author: author, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// const baseUrl = ''

// import { Post } from './post.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {

//   private posts = new BehaviorSubject([]);
//   public postsObs = this.posts.asObservable();

//   constructor(
//     public http: HttpClient
//   ) { }

//   pullPosts() {
//     return this.http.get('${baseUrl}/')
//   }
