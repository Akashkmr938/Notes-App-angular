import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
