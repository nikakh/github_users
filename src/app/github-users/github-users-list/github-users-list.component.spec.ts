import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubUsersServicesService } from '../github-users-services/github-users-services.service';
import { GithubUsersListComponent } from './github-users-list.component';

describe('GithubUsersListComponent', () => {
  let component: GithubUsersListComponent;
  let fixture: ComponentFixture<GithubUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUsersListComponent ],
      imports: [HttpClientTestingModule], 
      providers: [GithubUsersServicesService]
    })
    .compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
