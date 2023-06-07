import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.scss']
})
export class PracticesComponent implements OnInit, OnDestroy {
  aSub!: Subscription 
  chapters: any
  tests!:string[]


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
