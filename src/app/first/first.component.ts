import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router:Router, private route : ActivatedRoute) { }

  ngOnInit() {
  }

  onClick(){
    // just appends to current url and page will not be displayed.
    // this.router.navigate(['details'],{relativeTo: this.route});
    // navigates to whatever path is given in array which should match to path in app.route.ts
    this.router.navigate(['details/:id']);

      }

}
