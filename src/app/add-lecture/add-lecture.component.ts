import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlService} from '../services/control.service' 
import { ContentService} from '../services/content.service' 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.scss']
})
export class AddLectureComponent implements OnInit {
  formAddCh!: FormGroup
  formDelCh!:FormGroup
  formAddLec!: FormGroup
  formDelLec!: FormGroup

  aSubCrCh!: Subscription 
  aSubGetCh!: Subscription 
  aSubDelCh!: Subscription
  aSubAddLec!: Subscription
  aSubDelLec!: Subscription
  aSubFile!:Subscription

  chapters: any
  chDelId:any
  chAddLec:any
  chDelLec=0
  delLect:any
  file!:File

  constructor(private controlService: ControlService, private contentService: ContentService) { }

  ngOnInit(): void {
    this.formAddCh = new FormGroup({
      chapterName: new FormControl(null, [Validators.required]),
    })
    this.aSubGetCh = this.contentService.getChapters().subscribe(
      (Chapters: any) => {
        this.chapters=Chapters
        this.chDelId=Chapters[0].id
        this.chAddLec=Chapters[0].id
        this.delLect=Chapters[0].lectures[0].id
      }
    )
    this.formDelCh = new FormGroup({
    })
    this.formAddLec = new FormGroup({
      lectureName: new FormControl(null, [Validators.required]),
    })
    this.formDelLec = new FormGroup({
    })
  }



  onSubmitAddCh(){
    this.formAddCh.disable()
     this.aSubCrCh = this.controlService.createChapter(this.formAddCh.value.chapterName).subscribe(
       () => {
         alert("Раздел добавлен!")
         this.formAddCh.enable()
       },
       (        error: { error: { Message: any; }; }) =>{
         alert(error.error.Message)
         console.warn(error)
         this.formAddCh.enable()
       }
     )
  }

  onSubmitDelCh(){
    this.formDelCh.disable()
    this.aSubDelCh = this.controlService.deleteChapter(this.chDelId).subscribe(
      () => {
        alert("Раздел удалён!")
        this.formDelCh.enable()
      },
      (        error: { error: { Message: any; }; }) =>{
        alert(error.error.Message)
        console.warn(error)
        this.formDelCh.enable()
      }
    )
  }

  onFileUpload(event: any){
    const file = event.target.files[0]
    this.file=file
  }

  onSubmitAddLec(){
    this.formAddLec.disable()
    this.aSubAddLec = this.controlService.addLecture(this.chAddLec, this.formAddLec.value.lectureName).subscribe(
      (newLecture: any) => {
        this.aSubFile = this.controlService.addLectureFile(newLecture.id, this.file).subscribe()
        alert("Лекция добавлена!")
        this.formAddLec.enable()
      },
      (        error: { error: { Message: any; }; }) =>{
        alert(error.error.Message)
        console.warn(error)
        this.formAddLec.enable()
      }
    )
  }

  onSubmitDelLec(){
    {
      this.formDelLec.disable()
      this.aSubDelLec = this.controlService.deleteLecture(this.delLect).subscribe(
        () => {
          alert("Лекция удалёна!")
          this.formDelLec.enable()
        },
        (        error: { error: { Message: any; }; }) =>{
          alert(error.error.Message)
          console.warn(error)
          this.formDelLec.enable()
        }
      )
    }
  }

  delCha(id: any){
    this.chDelId = id
  }

  addLec(id: any){
    this.chAddLec = id
  }

  delLecCh(id: any){
    this.chDelLec = id
  }

  delLec(id: any){
    this.delLect = id
  }


  ngOnDestroy(){
    if(this.aSubCrCh){
      this.aSubCrCh.unsubscribe()
    }
    if(this.aSubGetCh){
      this.aSubGetCh.unsubscribe()
    }
    if(this.aSubDelCh){
      this.aSubDelCh.unsubscribe()
    }
    if(this.aSubAddLec){
      this.aSubAddLec.unsubscribe()
    }
    if(this.aSubDelLec){
      this.aSubDelLec.unsubscribe()
    }
    if(this.aSubFile){
      this.aSubFile.unsubscribe()
    }
    
  }


  
}
