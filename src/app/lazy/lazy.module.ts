import {NgModule} from '@angular/core';
import {FifthComponent} from './fifth/fifth.component';
import{Routes, RouterModule} from '@angular/router';

const routes: Routes=[
    { path : '', component: FifthComponent}
]

@NgModule({
declarations:[FifthComponent],
imports:[
    RouterModule.forChild(routes)    
],
providers:[],

})

export class LazyModule{}