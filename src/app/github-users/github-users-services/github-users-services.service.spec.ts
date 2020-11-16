import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubUsersServicesService } from './github-users-services.service';

describe('GithubUsersServicesService', () => {
  let service: GithubUsersServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [GithubUsersServicesService]});
    service = TestBed.inject(GithubUsersServicesService);
  });

  it('should return true', () => {
    expect(service.returnTrue()).toBeTruthy();
  });
});
