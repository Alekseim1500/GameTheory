import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'diplom';

  constructor(private auth: AuthService){

  }

  ngOnInit(){
    localStorage.setItem('language', 'ch')
    const potentialToken = localStorage.getItem('auth-token') 
    if (potentialToken!==null){
      this.auth.setToken(potentialToken)
    }
  }
}
