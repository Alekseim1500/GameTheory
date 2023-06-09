import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContentService } from '../services/content.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test:any
  params!:string[]
  imagePreview:any

  constructor(private contentService: ContentService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.imagePreview = '../../assets/avatar.jpg'
    this.userService.getUser().subscribe(
      (userInfo) => {
        if(userInfo.image!=null)
          this.imagePreview= 'http://localhost:9999/'+userInfo.image  
      })
    this.route.params.subscribe((params:Params)=>{
      this.params=params['id'].split("&", 2)
    })
    this.contentService.getTest(this.params[0], this.params[1]).subscribe(
      (test: any) => {
        this.test=test 
      }
    )
  }

  startTest(){
    localStorage.setItem('test', JSON.stringify(this.test))
    localStorage.setItem('testType', this.params[1])
  }



}



/*
{
  "parentId": 1,
  "title": "First test",
  "testQuestions": [
    {
      "question": "question1",
      "order": 1,
      "image": null,
      "testAnswers": [
        {
          "answer": "answer1",
          "isRight": false
        },
        {
          "answer": "answer2",
          "isRight": false
        },
        {
          "answer": "answer3",
          "isRight": false
        },
        {
          "answer": "answer4",
          "isRight": true
        }
      ]
    },
    {
      "question": "question2",
      "order": 2,
      "image": "http://localhost:9999/dfb08ca3-a712-480d-b7d4-2de9ca77b6d0.jpg",
      "testAnswers": [
        {
          "answer": "answer1",
          "isRight": false
        },
        {
          "answer": "answer2",
          "isRight": true
        },
        {
          "answer": "answer3",
          "isRight": false
        },
        {
          "answer": "answer4",
          "isRight": false
        }
      ]
    },
    {
      "question": "question3",
      "order": 3,
      "image": null,
      "testAnswers": [
        {
          "answer": "answer",
          "isRight": true
        }
      ]
    }
  ]
}
*/