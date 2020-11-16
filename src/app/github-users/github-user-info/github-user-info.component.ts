import { Component, OnInit, Input } from '@angular/core';
import { GithubUsersServicesService} from '../github-users-services/github-users-services.service'
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-github-user-info',
  templateUrl: './github-user-info.component.html',
  styleUrls: ['./github-user-info.component.scss', '../../shared.scss']
})
export class GithubUserInfoComponent implements OnInit {
  userInfo;
  userOrgs: Array<any>;
  userName: string;
  githubUserRepos: Array<any>;
  errorMsg: string;

  constructor(private githubUsersServicesService : GithubUsersServicesService, private route: ActivatedRoute, private router: Router) { 
    this.userInfo = {};
    this.userOrgs = [];
    this.githubUserRepos = [];
  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('username');
    this.getGithubUser();
  }


  getGithubUser() {
    this.githubUsersServicesService.getGithubUser(this.userName).toPromise().then((res: any) => {
      if(res.body) {
        this.userInfo = res.body;
        if(this.userInfo) {
          this.githubUsersServicesService.getUserOrgs(this.userInfo.organizations_url).toPromise().then((resp: any) => {
            if(resp) {
              this.userOrgs = resp;
            }
          })

          this.githubUsersServicesService.getUserRepos(this.userInfo.repos_url).subscribe((res: any) => {
            if(res.body)
              this.githubUserRepos = res.body;
          })
        }
      } else {
        this.router.navigateByUrl('/404');
      }
    })
  }

  back() {
    this.router.navigateByUrl('/');
  }
}
