import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubUsersServicesService } from './github-users/github-users-services/github-users-services.service';
import { GithubUsersListComponent } from './github-users/github-users-list/github-users-list.component';
import { RouterModule } from '@angular/router';


describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RouterModule
      ],
      declarations: [
        AppComponent,
        GithubUsersListComponent
      ],
      providers: [GithubUsersServicesService]

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
