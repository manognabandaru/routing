import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FirstComponent} from './first/first.component'; 
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component';
// import {FifthComponent} from './fifth/fifth.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { AuthGuard } from './Auth-Guard.service';
import { CanDeactivateGuard } from './canDeactivate.service';

const routes : Routes =[
  { path:'', redirectTo: 'home', pathMatch:'full' },
  { path:'home', component: FirstComponent },
  { path:'details/:id', component: SecondComponent, canDeactivate:[CanDeactivateGuard] },
  { path:'news', component: ThirdComponent, canActivate:[AuthGuard], children:[
                            { path:':aa', component: FourthComponent }]
   },
     //  { path:'about', component: FifthComponent },
  { path: 'about',loadChildren:'./lazy/lazy.module#LazyModule' , canActivateChild:[AuthGuard]},
     { path:'**', component: NotFoundComponent }
];


export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
