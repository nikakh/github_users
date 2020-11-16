import { Component, OnInit, Input } from '@angular/core';
import { GithubUsersServicesService} from '../github-users-services/github-users-services.service'
import { RouterModule } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss', '../../shared.scss']
})
export class GithubUserComponent implements OnInit {
  @Input() githubUser: any;
  githubUserRepos;

  constructor(private githubUsersServicesService : GithubUsersServicesService,
              private router: RouterModule) { 
    this.githubUser = {};
    this.githubUserRepos = [];
  }

  ngOnInit(): void {
    this.getUserRepos();
  }

  getUserRepos() {
    this.githubUsersServicesService.getUserRepos(this.githubUser.repos_url).subscribe((res: any) => {
      if(res.body)
        this.githubUserRepos = res.body;
    })
  }
}
