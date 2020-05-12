import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  loggenIn = false;
  constructor(private authService: AuthService) {
    this.authService.getStatus()
      .subscribe((result) => {
        if (result && result.uid) {
          this.loggenIn = true;
        } else {
          this.loggenIn = false;
        }
      }, (error) => {
        this.loggenIn = false;
      });
  }

  canActivate() {
    return this.loggenIn;
  }
}
