import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent implements OnInit {
  chapters=["Chapter1", "Chapter2", "Chapter3"];
  lectures=["Lecture11","Lecture12","Lecture13"];
  practice=["Practice1","","Practice3"];

  constructor() { }

  ngOnInit(): void {
  }

}
