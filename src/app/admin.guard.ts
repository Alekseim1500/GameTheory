import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, CanActivate, RouterState, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "./services/auth.service";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn:'root'
})
export class AdminGuard implements CanActivateChild, CanActivate{
    constructor(private auth: AuthService,
                private jwtHelperService : JwtHelperService,
                private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        if(this.jwtHelperService.decodeToken(this.auth.getToken())['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']=="Admin"){
            return of(true)
        } else{
            this.router.navigate(['/home'])
            alert("Отказано в доступе")
            return of(false)
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        return this.canActivate(route, state)
    }
}