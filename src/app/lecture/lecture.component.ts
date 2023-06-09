import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxDocViewerComponent } from 'ngx-doc-viewer';
import { compileDirectiveFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit, OnDestroy, AfterViewInit {
  aSub1!: Subscription 
  aSub2!: Subscription 
  aSub3!: Subscription 
  lecture: any
  lectureFile!: File
  url!: string
  @ViewChild(NgxDocViewerComponent) docViewer!: NgxDocViewerComponent
  
  constructor(private contentService: ContentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.aSub1 = this.route.params.subscribe((params:Params)=>{
      this.aSub2 = this.contentService.getLecture(params['id']).subscribe(
        (lecture: any) => {
          this.lecture=lecture 
          this.url="http://localhost:9999/"+lecture.contentPath   
          console.log(this.url)  
        }
      )
    }
    )
  }

  ngAfterViewInit(){
    const intervalId=setInterval(()=>{
      const viewer = document.querySelector(".doc-viewer")
      if(viewer?.querySelectorAll("img, p").length){
        const immages=viewer.querySelectorAll("img")
        immages.forEach(element => {
        element.setAttribute("style", "max-width:100%;")
      });
      clearInterval(intervalId)
      }
    },100)
  }





  ngOnDestroy(){
    if(this.aSub1){
      this.aSub1.unsubscribe()
    }
    if(this.aSub2){
      this.aSub2.unsubscribe()
    }
    if(this.aSub3){
      this.aSub3.unsubscribe()
    }
  }



}
