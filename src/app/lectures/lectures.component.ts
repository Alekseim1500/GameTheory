import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {
  chapters=["Chapter1", "Chapter2", "Chapter3"];
  lectures1=["Lecture11","Lecture12","Lecture13"];
  lectures2=["Lecture21","Lecture22","Lecture23"];
  lectures3=["Lecture31","Lecture32","Lecture33"];

  constructor() { }

  ngOnInit(): void {
  }

}
