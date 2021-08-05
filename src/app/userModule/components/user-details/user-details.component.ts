import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../models/iUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user: IUser

  constructor(private router:Router) {
    this.user= this.router.getCurrentNavigation()?.extras.state as IUser
  }

  ngOnInit(): void {
  }

}
