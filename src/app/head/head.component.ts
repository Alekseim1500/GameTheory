import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  logIn = false;
  signIn = false;


close(){
  document.addEventListener('keypress', event => {
    const key = event.key;
    if (key === "Escape") {
        console.log("asd");
        this.logIn=false;
        this.signIn=false;
    }
});
}

  constructor() {

   }

  ngOnInit(): void {
  }

}
