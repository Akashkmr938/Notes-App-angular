import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('user'));
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.userData = user;
      if (this.userData) {
        sessionStorage.setItem('user', JSON.stringify(this.userData));
        this.httpService.post('saveUser', this.userData).subscribe();
      }
    });
  }

  signOut(): void {
    this.authService.signOut(true);
    sessionStorage.removeItem('user');
    this.userData = null;
    this.router.navigate(['/']);
  }
}
