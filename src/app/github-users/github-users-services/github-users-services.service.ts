import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersServicesService {

  constructor(private http: HttpClient) {
  }

  getGithubUsers() {
    const req = new HttpRequest('GET', 'https://api.github.com/users?per_page=5');
    return this.http.request(req);
  }

  returnTrue() {
    return true;
  }

  getUserRepos(repo_url) {
    const req = new HttpRequest('GET', repo_url);
    return this.http.request(req);
  }

  getUserOrgs(org_url) {
    // const req = new HttpRequest('GET', org_url);
    return this.http.get(org_url);
  }

  getGithubUser(user_name) {
    const req = new HttpRequest('GET', `https://api.github.com/users/${user_name}`);
    return this.http.request(req)
                    .pipe(
                      catchError((err: any) => 'error')
                    );
  }

  getGithubUserByUsername(user_name) {
    const req = new HttpRequest('GET', `https://api.github.com/search/users?q=${user_name}`);
    return this.http.request(req);
  }
}
