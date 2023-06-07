import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserInfo } from '../interfces';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChild('input') inputRef!: ElementRef;
  aSub1!: Subscription 
  aSub2!: Subscription 
  aSub3!: Subscription 
  userInfo!: UserInfo;
  image!: File
  imagePreview:any
  form!: FormGroup;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //const userFromJwt = this.jwtHelperService.decodeToken(this.auth.getToken())
    this.imagePreview = '../../assets/avatar.jpg'
    this.aSub1 = this.userService.getUser().subscribe(
      (userInfo) => {
        this.userInfo=userInfo
        if(this.userInfo.image!=null)
          this.imagePreview= 'http://localhost:9999/'+userInfo.image
      }
    )
    this.form = new FormGroup({
      current: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      new: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      newR: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })
  }

  ngOnDestroy(){
    if(this.aSub1){
      this.aSub1.unsubscribe()
    }
    if(this.aSub2){
      this.aSub2.unsubscribe()
    }
    if(this.aSub3){
      this.aSub3.unsubscribe()
    }
  }

  triggerClick(){
    this.inputRef.nativeElement.click()
  }
  
  onFileUpload(event: any){
    const file = event.target.files[0]
    this.image=file

    const reader = new FileReader()
    reader.onload =()=>{
        this.imagePreview = reader.result
      }
    reader.readAsDataURL(file)
    this.aSub2 = this.userService.changeAvatar(this.image).subscribe()
  }

  onSubmit(){
    this.form.disable()
    const change= {
      current: this.form.value.current,
      new: this.form.value.new,
      newR: this.form.value.newR
    }
    if(change.new!=change.newR){
      alert("Новые пароли не совпадают")
      this.form.enable()
    }
    else{
      this.aSub3 = this.userService.changePass(change.current,change.new).subscribe(
        () => {
          alert("Пароль изменён!")
          this.form.enable()
        },
        (        error: { error: { Message: any; }; }) =>{
          alert(error.error.Message)
          console.warn(error)
          this.form.enable()
        }
      )
    }
  }



}
