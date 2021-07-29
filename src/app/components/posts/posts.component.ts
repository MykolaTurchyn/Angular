import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => {
      this.posts = value
    })
  }

  ngOnInit(): void {
  }

}
