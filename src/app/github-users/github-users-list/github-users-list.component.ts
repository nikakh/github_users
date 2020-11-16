import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { GithubUsersServicesService} from '../github-users-services/github-users-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-users-list',
  templateUrl: './github-users-list.component.html',
  styleUrls: ['./github-users-list.component.scss', '../../shared.scss']
})

export class GithubUsersListComponent implements OnInit {
  @Input() githubUsers: any;
  searchText;
  searchedItems: Array<any>;
  searchResults;
  inline;

  constructor(private githubUsersServicesService : GithubUsersServicesService, private router: Router) {
    this.searchedItems = [];
    this.githubUsers = [];
    this.inline = true;
  }

  ngOnInit(): void {
    if(localStorage.getItem('searchedItems')) {
      this.searchedItems = JSON.parse(localStorage.getItem('searchedItems'));
    }
  }

  search(searchText) {
    if(searchText) {
      this.searchText = searchText;
    }

    if(this.searchText !== undefined && this.searchText !== '' ) {

      if(localStorage.getItem('searchedItems')) {
        this.searchedItems = JSON.parse(localStorage.getItem('searchedItems'));
      }

      this.searchedItems.push(this.searchText);
      localStorage.setItem('searchedItems', JSON.stringify(this.searchedItems));

      if(this.searchedItems.length > 3) {
        this.searchedItems.splice(0,1);
        localStorage.setItem('searchedItems', JSON.stringify(this.searchedItems));
      }

      this.githubUsersServicesService.getGithubUserByUsername(this.searchText).subscribe((res: any) => {
        if(res.body) {
          this.githubUsers = res.body.items;
          if(this.githubUsers.length === 1) {
            this.router.navigateByUrl(`/${this.githubUsers[0].login}`);
          }
        }

      })
    }
  }
  
  clear() {
    this.searchText = '';
    this.githubUsersServicesService.getGithubUsers().subscribe((res: any) => {
      if(res.body)
        this.githubUsers = res.body;
    })
  }

  makeInline() {
    this.inline = true;
  }

  makeIntoBlocks() {
    this.inline = false;
  }

}
