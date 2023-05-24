import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})

export class HeadComponent implements OnInit {
  logIn = false;
  signIn = false;
  openMenu = false;
  teacher=true;
  fName='Имя'
  lName='Фамилия'

  constructor() {
  document.addEventListener('keyup', event => {
      if (event.code == 'Escape') {
        this.logIn = false;
        this.signIn = false;      
      }
  });

  }

  ngOnInit(): void {
    
  }

  

}
