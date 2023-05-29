import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.scss']
})
export class AddLectureComponent implements OnInit {
  chapters=["Chapter1","Chapter2","Chapter3","Chapter4","Chapter5"];


  constructor() { }

  ngOnInit(): void {
  }

}
