import { Component, OnInit } from '@angular/core';
import { GithubUsersServicesService} from './github-users-services/github-users-services.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss', '../shared.scss']
})
export class GithubUsersComponent implements OnInit {
  githubUsers: any;

  constructor(private githubUsersServicesService : GithubUsersServicesService) { }

  ngOnInit(): void {
    this.getGithubUsers();
  }

  getGithubUsers() {
    this.githubUsersServicesService.getGithubUsers().subscribe((res: any) => {
      if(res.body)
        this.githubUsers = res.body;
    })
  }

}
