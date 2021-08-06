import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../models/iUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
  //   return this.userService.getUsers();
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.userService.getUsers();
  }

}
