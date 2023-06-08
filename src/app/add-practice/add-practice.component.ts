import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-practice',
  templateUrl: './add-practice.component.html',
  styleUrls: ['./add-practice.component.scss']
})
export class AddPracticeComponent implements OnInit {
  chapters=["Chapter1","Chapter2","Chapter3","Chapter4","Chapter5"];
  lectures=["Lecture1","Lecture2","Lecture3","Lecture4","Lecture5"];
  answerCh=true
  answerFi=false




  constructor() { }

  ngOnInit(): void {
  }

  onChange(type: number){
    if(type==1) {
      this.answerCh=true
      this.answerFi=false
    }
    if (type==2){
      this.answerCh=false
      this.answerFi=true
    }
  }

}
