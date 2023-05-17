import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  lName="Фамилия";
  fName="Имя";
  email="Отчество";
  constructor() { }

  ngOnInit(): void {
  }

}
