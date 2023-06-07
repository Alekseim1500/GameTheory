import { Injectable } from '@angular/core';
import { UserInfo } from '../interfces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getUser(): Observable<UserInfo>{
        return this.http.get<UserInfo>('http://localhost:9999/api/Account/users/current')
    }

    changePass(current: string, newPass: string): any{
      return this.http.patch('http://localhost:9999/api/Account/users/current/password', {"currentPassword": current, "newPassword": newPass})
  }

    changeAvatar(image: File): any{
      const fd = new FormData()
      fd.append('image',image,image.name)
      return this.http.post <any> ('http://localhost:9999/api/Account/users/current/photo', fd)
  }

}
