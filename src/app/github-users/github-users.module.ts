import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { GithubUsersComponent } from './github-users.component';
import { GithubUsersListComponent } from './github-users-list/github-users-list.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubUsersRoutingModule } from './github-users-routing.module';
import { GithubUserInfoComponent } from './github-user-info/github-user-info.component';

@NgModule({
  declarations: [
    GithubUsersComponent,
    GithubUserComponent,
    GithubUsersListComponent,
    GithubUserInfoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    GithubUsersRoutingModule
  ],
  providers: [],
})
export class GithubUsersModule { }