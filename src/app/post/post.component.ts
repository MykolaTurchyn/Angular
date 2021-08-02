import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../model/iPost";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goToPDetails(): void {
    this.activatedRoute.params.subscribe(value => {
      this.router.navigate([this.post.id], {state: this.post, relativeTo: this.activatedRoute})
    })
  }
}
