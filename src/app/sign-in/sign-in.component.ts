import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy{
  form!: FormGroup;
  aSub!: Subscription
  
  constructor(private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ){
}

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      fName: new FormControl(null, [Validators.required]),
      lName: new FormControl(null, [Validators.required])
    })
  }

  ngOnDestroy(){
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }

  onSubmit(){
    this.form.disable()
    const userInfo= {
      email: this.form.value.email,
      password: this.form.value.password,
      firstName: this.form.value.fName,
      lastName: this.form.value.lName
    }
    this.aSub = this.auth.register(userInfo).subscribe(
      () => this.router.navigate(['/login'],{queryParams:{registered:true}}),
      error =>{
        console.warn(error)
        this.form.enable()
      }
    )
  }
}
