import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message='Some Welcome Message'
  name=''
  constructor(private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name']
    console.log(this.message)
  }

}

export class Class1{

}

export class Class2{

}