import {ActivatedRouteSnapshot, RouterState,CanActivate,RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor (private sharedService: SharedService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean
    {
        return this.sharedService.userExist();
    }
}