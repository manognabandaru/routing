import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
// Method 2 routing:
import { Routing} from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuard} from './Auth-Guard.service';
import { SharedService } from './shared.service';
import { CanDeactivateGuard } from './canDeactivate.service';

//method 1  
//Add for Routing:
// import { RouterModule, Routes } from '@angular/router';

// const routes : Routes =[
//   { path:'', component: FirstComponent },
//   { path:'home', component: FirstComponent },
//   { path:'details', component: SecondComponent },
//   { path:'news', component: ThirdComponent },
//   { path:'contact', component: FourthComponent },
//   { path:'about', component: FifthComponent }
// ]


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // method 2 routing
    Routing,
    FormsModule
    // method 1 routing 
   // RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard,SharedService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
