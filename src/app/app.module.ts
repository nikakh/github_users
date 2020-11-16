import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GithubUsersListComponent } from './github-users/github-users-list/github-users-list.component';
import { GithubUserComponent } from './github-users/github-user/github-user.component';
import { GithubUserInfoComponent } from './github-users/github-user-info/github-user-info.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent,
    GithubUserComponent,
    GithubUsersListComponent,
    GithubUserInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
