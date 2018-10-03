import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private route: ActivatedRoute, private sharedService:SharedService){}

  ngInit(){
    console.log(this.route.snapshot.params['id']);
  }

  onLogin(){
    this.sharedService.logIn();
  }

  onLogout(){
    this.sharedService.logOut();
  }
}
