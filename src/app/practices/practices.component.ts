import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.scss']
})
export class PracticesComponent implements OnInit {
  chapters=["Chapter1", "Chapter2", "Chapter3"];
  practices=["Practice1", "Practice1", "Practice1"]
  constructor() { }

  ngOnInit(): void {
  }

}
