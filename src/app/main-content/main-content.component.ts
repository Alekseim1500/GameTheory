import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {
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
