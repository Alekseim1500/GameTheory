import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  practicName = "Имя практики"
  questionText="Как называются игры с постоянным фондом игры, доступные ресурсы игры не могут стать больше или меньше. В этом случае сумма всех выигрышей равна сумме всех проигравших за каждый ход. Пример такой игры — покер.  Любая возможная партия некоторой игры имеет нулевую сумму выигрышей всех игроков."
  questions = [{isActive:false, isAnsvered:false},
  {isActive:false, isAnsvered:true},
  {isActive:false, isAnsvered:true},
  {isActive:true, isAnsvered:false},
  {isActive:false, isAnsvered:false},
  {isActive:false, isAnsvered:false},
  {isActive:false, isAnsvered:false},
  {isActive:false, isAnsvered:true},
  {isActive:false, isAnsvered:true},
  {isActive:false, isAnsvered:false},
  {isActive:false, isAnsvered:false},
  {isActive:false, isAnsvered:false},
  {isActive:false, isAnsvered:false},
  {isActive:false, isAnsvered:false},
  {isActive:false, isAnsvered:false},
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
