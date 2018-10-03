import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  name="mano";
  valueChanged= false;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
  }

  onSave(){
    this.valueChanged= true;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.name!="mano" && !this.valueChanged){
      return confirm('Do yu want to exit ?');
      }
    else {
      return true;
      } 
  }

}
