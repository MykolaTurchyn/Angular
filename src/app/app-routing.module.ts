import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {PostsComponent} from "./components/posts/posts.component";
import {UsersDetailsComponent} from "./components/users-details/users-details.component";
import {PostsDetailsComponent} from "./components/posts-details/posts-details.component";

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id/posts', component: UsersDetailsComponent},
    ]
  },
  // {path: 'users/:id', component: UsersDetailsComponent},
  {
    path: 'posts', component: PostsComponent,
    children: [
      {path: ':id/comments', component: PostsDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
