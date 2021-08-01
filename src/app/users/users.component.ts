import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../model/iUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private userServices: UserService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.userServices.getUsers().subscribe(value => {
      console.log(value)
      this.users = value
    })
  }

}
