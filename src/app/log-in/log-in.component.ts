import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit, OnDestroy{
  form!: FormGroup;
  aSub! : Subscription 

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute
              ){
  }

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })

    this.route.queryParams.subscribe((params: Params)=> {
      if(params['registered']){
      alert("Вы зарегистрированы!")
      } else if (params['accessDenied']){
      alert("Авторизируйтесь!")
      } else if(params['sessionFailed']){
      alert("Войдите в систему снова!")  
      }
    })
  }

  ngOnDestroy(){
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }

  onSubmit(){
    this.form.disable()
    const user= {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.aSub = this.auth.login(user).subscribe(
      () => this.router.navigate(['/home']),
      error =>{
        alert(error.error.Message)
        console.warn(error)
        this.form.enable()
      }
    )
  }

}
