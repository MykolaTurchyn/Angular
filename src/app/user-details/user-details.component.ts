import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IUser} from "../model/iUser";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private router: Router) {
    // console.log(history.state)
    // console.log(this.router.getCurrentNavigation()?.extras.state);
    this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
  }

  ngOnInit(): void {
  }

  goBack() {
    history.back()
  }
}
