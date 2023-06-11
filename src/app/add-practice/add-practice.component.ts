import { Component, OnInit } from '@angular/core';
import { quest } from '../interfces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContentService} from '../services/content.service' 
import { ControlService} from '../services/control.service' 
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-practice',
  templateUrl: './add-practice.component.html',
  styleUrls: ['./add-practice.component.scss']
})
export class AddPracticeComponent implements OnInit {
  chapters:any;
  form!: FormGroup
  ch = 0
  lec = "notForLect"
  chapterId = 1
  testType = "Chapter"


  questions:quest[] =[{
    question: "",
    image: "",
    answerType: 1,
    order: 0,
    testAnswers: [{
          answer: "",
          isRight: false
      }
      ] 
  }]   
  image: any;

  constructor(private contentService: ContentService, private controlService: ControlService, private router: Router) { }

  ngOnInit(): void {
    this.contentService.getChapters().subscribe(
      (Chapters: any) => {
        this.chapters=Chapters
      }
    )
    this.form = new FormGroup({
      testName: new FormControl(null, [Validators.required]),
    })
  }

  onChange(type: number, questId: number){
    this.questions[questId].answerType=type
  }

  addQuestion(){
    this.questions.push({
      question: "",
      image: "",
      answerType: 1,
      order:0,
      testAnswers: [{
            answer: "",
            isRight: false
        }
        ] 
    })
  }

  onFileUpload(event: any, id: number){
    const file = event.target.files[0]
    this.image=file
    this.controlService.immageTest(this.image).subscribe((url: any)=>
    {
      this.questions[id].image=url.path
    })
  }

  Ch(id: any){
    this.chapterId = id.split("&", 2)[0]
    this.ch = id.split("&", 2)[1]
  }

  Lec(id: any){
    this.lec = id
  }


  createTest(){
    let num = 1
    let answ
    let buf: any
    this.questions.forEach(element => {
      answ= document.getElementById(String(num))
      if(answ!=null)
         buf = (answ.querySelector(".inputField") as HTMLInputElement).value
      element.question = buf
      element.order = num
      if(element.answerType==1){
        if(answ!=null){
          buf = (answ.querySelectorAll("input") as unknown as HTMLInputElement)
          element.testAnswers[0].isRight=buf[3].checked
          element.testAnswers[0].answer=buf[4].value

          element.testAnswers.push({answer:buf[6].value, isRight:buf[5].checked})
          element.testAnswers.push({answer:buf[8].value, isRight:buf[7].checked})
          element.testAnswers.push({answer:buf[10].value, isRight:buf[9].checked})
        }
      }
      else{
          if(answ!=null){
            buf = (answ.querySelectorAll("textarea") as unknown as HTMLInputElement)
            element.testAnswers[0].isRight=true
            element.testAnswers[0].answer=buf[1].value
          }
      }
      num++
    });

    let parentId: any
    if(this.lec == "notForLect"){
      parentId = this.chapterId
      this.testType="Chapter"
    }
    else{
      parentId= this.lec
      this.testType="Lecture"
    }
    this.controlService.addTest(parentId,this.form.value.testName,this.questions,this.testType).subscribe(
      () => {
        this.router.navigate(['/practices'])
      }
    )
  }
}
