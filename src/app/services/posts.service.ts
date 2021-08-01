import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../model/iPost";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this._url)
  }
  getPosts(): Observable<any> {
    return this.httpClient.get<IPost[]>(this._url)
  }
}
