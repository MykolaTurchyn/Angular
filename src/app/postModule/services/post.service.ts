import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../../models/iPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url = 'https://jsonplaceholder.typicode.com'

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this._url + '/posts')
  }

  getPosts():Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this._url+ '/posts')
  }
}
