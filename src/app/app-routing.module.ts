import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GithubUserInfoComponent } from './github-users/github-user-info/github-user-info.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: GithubUsersComponent },
  { path: '404', component: NotFoundComponent },
  { path: ':username', component: GithubUserInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
