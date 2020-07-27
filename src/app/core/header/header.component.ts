import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { HttpService } from '../../services/http.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userData: any;
  constructor(
    private authService: SocialAuthService,
    private httpService: HttpService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user'));
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.userData = user;
      if (this.userData) {
        // localStorage.setItem('user', JSON.stringify(this.userData));
        this.httpService.post('saveUser', this.userData).subscribe();
        this.sharedService.loginData = this.userData;
      }
    });
  }

  signOut(): void {
    this.authService.signOut(true);
    this.sharedService.loginData = null;
    // localStorage.removeItem('user');
  }
}
