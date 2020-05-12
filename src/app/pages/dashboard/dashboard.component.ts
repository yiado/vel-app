import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loggenIn = false;
  loggedUser:any = null;
  constructor(private authService: AuthService) { 
    this.authService.getStatus()
    .subscribe((result)=>{
      if(result && result.uid){
        this.loggenIn = true;
        setTimeout(()=>{
          this.loggedUser = this.authService.getUser().currentUser.email;
        }, 500);
      } else {
        this.loggenIn = false;
      }
    }, (error)=>{
      this.loggenIn = false;
    });
  }

  ngOnInit() {
  }
  
  logOut(){
    this.authService.logOut();
  }

}
