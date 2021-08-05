import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./userModule/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./postModule/post.module').then(m => m.PostModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
