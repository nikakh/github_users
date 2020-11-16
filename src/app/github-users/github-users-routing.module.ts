import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { GithubUsersComponent } from './github-users.component';
import { GithubUserInfoComponent } from './github-user-info/github-user-info.component';

const routes: Routes = [
  { path: '/', component: GithubUsersComponent },
  { path: '/:username', component: GithubUserInfoComponent }
];

export const routing = RouterModule.forRoot(routes, { enableTracing: true })


@NgModule({
  declarations: [GithubUsersComponent, GithubUserInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class GithubUsersRoutingModule {
  
}