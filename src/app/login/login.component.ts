import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='hebatullah'
  password=''
  errorMessage='Invalid Message'
  invalidLogin=false
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if (this.username==='hebatullah' && this.password==='1234'){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    } else {
      this.invalidLogin =true
    }

  }

}
