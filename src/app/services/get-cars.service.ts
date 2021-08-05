import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../models/iCar";

@Injectable({
  providedIn: 'root'
})
export class GetCarsService {
  private _url = 'http://92.253.237.122/api/v1/cars'

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this._url)
  }

  getCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(this._url)
  }
}
