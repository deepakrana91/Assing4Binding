import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4.0';

  password:string;
  username:string;
  Enterusername:string;
  Enterpassword:string;
  ishighlighted:boolean;
  Title:string;

  ngOnInit() {

    this.password="password";
    this.username="Username";
    this.ishighlighted=false;

  }

   onclick() {
    this.Title=this.username+" "+this.password;
  }
}

