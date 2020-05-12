import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loguear:any = {};
  //operation: string = 'login';
  //email: string = null;
  //password: string = null;
  constructor(private router:Router, private authService: AuthService) { 
    //this.authService.login('email','password');
  }

  ngOnInit() {
  }
  
  login(){
    this.authService.loginEmail(this.loguear.email, this.loguear.password);
  }
}
