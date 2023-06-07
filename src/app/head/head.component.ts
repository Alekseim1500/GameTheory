import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User, UserInfo } from '../interfces';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})

export class HeadComponent implements OnInit, OnDestroy {

  openMenu = false;
  teacher=true;
  aSub!: Subscription;
  userInfo!: UserInfo;
  imagePreview:any


  constructor(private auth: AuthService,
    private userService: UserService,
    private jwtHelperService: JwtHelperService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    //const userFromJwt = this.jwtHelperService.decodeToken(this.auth.getToken())
    console.log(this.jwtHelperService.decodeToken(this.auth.getToken())['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'])
    this.aSub = this.userService.getUser().subscribe(
      (userInfo) => {
        this.userInfo=userInfo
        if(this.userInfo.image!=null)
          this.imagePreview= 'http://localhost:9999/'+userInfo.image  
      }
    )
  }

  
  ngOnDestroy(){
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }



  logout(event: Event){
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
