import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  test:any
  time=0
  intervalId:any
  answer: Array<{id:number, answers:string[]}> = []

  constructor(private contentService: ContentService, private router: Router) { }

  ngOnInit(): void {
    this.intervalId = setInterval(()=>{this.time++},1000)
    const storage =localStorage.getItem('test')
    if(storage!=null){
      this.test=JSON.parse(storage)
      console.log(this.test)
    }
  }

  send(){
    clearInterval(this.intervalId)
    let num=1
    let answ
    this.test.questions.forEach((element: any) => {
      if(element.answers.length!=0){
        answ= document.querySelector('input[name=answer'+num+']:checked')
        if(answ!=null){
            this.answer.push({"id": element.id, "answers": [(answ as HTMLInputElement).value]})
          }
          else{
            this.answer.push({"id": element.id, "answers": ['']})
          }
      }
      else{
        answ= document.getElementById('textarea'+num)
        if(answ!=null){
            this.answer.push({"id": element.id, "answers": [(answ as HTMLInputElement).value]})
          }
          else{
            this.answer.push({"id": element.id, "answers": ['']})
          }
      }
      num++
    });
    console.log(this.answer)
    const typeTest=localStorage.getItem('testType')
    if(typeTest!=null){
      this.contentService.postRes(this.test.id,typeTest,this.answer,this.time).subscribe(
        () => {
          this.router.navigate(['/test/'+this.test.id+'&'+typeTest])
        }
      )
      localStorage.removeItem('test')
      localStorage.removeItem('testType')
    }
  }

}
