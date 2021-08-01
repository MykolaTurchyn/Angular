import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../model/iUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this._url)
  }

  getUsers(): Observable<any> {
    return this.httpClient.get<IUser[]>(this._url)
  }
}
