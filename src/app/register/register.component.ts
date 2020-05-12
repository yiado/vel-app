import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addRegister:any = {};

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.registerEmail(this.addRegister.email, this.addRegister.password);
  }

}
