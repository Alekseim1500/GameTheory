import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent implements OnInit {
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
