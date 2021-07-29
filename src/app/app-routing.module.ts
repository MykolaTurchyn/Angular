import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {PostsComponent} from "./posts/posts.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {PostDetailsComponent} from "./post-details/post-details.component";

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [{path: ':id', component: UserDetailsComponent}]
  },
  {
    path: 'posts', component: PostsComponent,
    children: [
      {path: ':id', component: PostDetailsComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
