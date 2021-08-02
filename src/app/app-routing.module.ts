import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {PostsComponent} from "./posts/posts.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserDeactivateService} from "./services/user-deactivate.service";
import {CanActivateService} from "./services/can-activate.service";

const routes: Routes = [
  {path: 'users', component: UsersComponent, canDeactivate: [UserDeactivateService]},
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    canActivate: [CanActivateService],
    canDeactivate: [UserDeactivateService]
  },
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
