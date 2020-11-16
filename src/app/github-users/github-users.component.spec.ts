import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubUsersServicesService } from './github-users-services/github-users-services.service';
import { GithubUsersComponent } from './github-users.component';

describe('GithubUsersComponent', () => {
  let component: GithubUsersComponent;
  let fixture: ComponentFixture<GithubUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUsersComponent ],
      imports: [HttpClientTestingModule], 
      providers: [GithubUsersServicesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
