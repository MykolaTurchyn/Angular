import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private  htpClient : HttpClient) {
  }

  getPosts() : Observable<IPost[]> {
   return  this.htpClient.get<IPost[]>('http://jsonplaceholder.typicode.com/posts')
  }
}
