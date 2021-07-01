import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService {

  ROOT_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }


  /*
    Post request to add blog.
  */
  addPost(title: string, author: string, content: string) {
    console.log("frontend works!");
    return this.http.post(`${this.ROOT_URL}/addBlog`, {title, author, content});
  }

  /*
    Get request to search for blog.
  */
  findPost(title: string, author: string, content: string) {
  }

  /*
    Returns all blogs.
  */
  getPosts(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/getBlogs`);
  }
}
