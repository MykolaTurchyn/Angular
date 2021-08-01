import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.service";
import {PostsService} from "../services/posts.service";
import {IPost} from "../model/iPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postsService: PostsService) {

  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value)

  }


}
