import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../models/iUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
private _url = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this._url)
  }

  getUsers():Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this._url + '/users')
  }
}
