import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../model/iPost";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private router:Router) {
   this.post= this.router.getCurrentNavigation()?.extras.state as IPost
  }


  ngOnInit(): void {
  }

  goBack() {
    history.back()
  }
}
