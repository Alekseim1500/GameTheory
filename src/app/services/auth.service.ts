import { Injectable } from '@angular/core';
import { User, UserInfo } from '../interfces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private token = '';

    constructor(private http: HttpClient) { }


    setToken(token: string){
        this.token=token
    }

    getToken():string{
        return this.token
    }

    isAuth():boolean{
        return !!this.token 
    }

    logout(){
        this.setToken('')
        localStorage.clear()
    }

    
    login(user: User): Observable<{ token: string }>{
        return this.http.post<{ token: string }> ('http://localhost:9999/api/Account/login', user).pipe(
            tap(
                ({token})=>{
                    localStorage.setItem('auth-tocken', "Bearer "+token)
                    this.setToken("Bearer "+token)
                }
            )
        )
    }

    register(userInfo: UserInfo): Observable< User >{
        return this.http.post<User> ('http://localhost:9999/api/Account/register', userInfo)
    }

}
