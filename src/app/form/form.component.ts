import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {IUser} from "../models/iUser";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  click() {
  }
}
