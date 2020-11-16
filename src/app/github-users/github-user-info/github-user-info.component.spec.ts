import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubUsersServicesService } from '../github-users-services/github-users-services.service';
import { RouterTestingModule } from '@angular/router/testing';
import { GithubUserInfoComponent } from './github-user-info.component';

describe('GithubUserInfoComponent', () => {
  let component: GithubUserInfoComponent;
  let fixture: ComponentFixture<GithubUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUserInfoComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule], 
      providers: [GithubUsersServicesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
