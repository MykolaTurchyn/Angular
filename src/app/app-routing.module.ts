import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolveService} from "./services/user-resolve.service";

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {data: UserResolveService}
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
