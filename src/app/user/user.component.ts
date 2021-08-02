import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../model/iUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goToUDetails() {
    this.router.navigate([this.user.id], {state: this.user, relativeTo: this.activatedRoute})
  }
}
