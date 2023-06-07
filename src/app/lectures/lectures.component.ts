import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit, OnDestroy {
  aSub!: Subscription 
  chapters: any



  constructor(private contentService: ContentService) { }


  ngOnInit(): void {
    this.aSub = this.contentService.getChapters().subscribe(
      (Chapters: any) => {
        this.chapters=Chapters      
      }
    )

  }

    
  ngOnDestroy(){
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }

}
