import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {PostsComponent} from "./posts/posts.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {
    path: 'posts', component: PostsComponent,
    children:
      [
        {path: ':id', component: PostDetailsComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
