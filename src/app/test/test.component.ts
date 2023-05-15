import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  testName='Название теста';
  questionCount=10;
  timeCount = 90;
  lName = "Фамилия"
  fName = "Имя"
  resultTime = "101 мин"
  resultProsent = "80%"


  constructor() { }

  ngOnInit(): void {
  }

}
