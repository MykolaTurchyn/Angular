import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {PostsComponent} from "./components/posts/posts.component";
import {UsersDetailsComponent} from "./components/users-details/users-details.component";

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UsersDetailsComponent},
    ]
  },
  // {path: 'users/:id', component: UsersDetailsComponent},
  {path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
