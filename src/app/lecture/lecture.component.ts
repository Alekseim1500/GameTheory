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
  lectureName="Название лекции";
  lectureText="Это текст лекции который я уже могу брать из Тайпскрипта Не следует, однако, забывать, что реализация намеченных плановых заданий играет определяющее значение для системы массового участия. Следует отметить, что экономическая повестка сегодняшнего дня способствует повышению качества распределения внутренних резервов и ресурсов. Безусловно, перспективное планирование в значительной степени обусловливает важность новых принципов формирования материально-технической и кадровой базы. Наше дело не так однозначно, как может показаться: современная методология разработки играет важную роль в формировании новых предложений! Также как новая модель организационной деятельности, в своём классическом представлении, допускает внедрение экономической целесообразности принимаемых решений. Вот вам яркий пример современных тенденций — разбавленное изрядной долей эмпатии, рациональное мышление, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для первоочередных требований. Приятно, граждане, наблюдать, как акционеры крупнейших компаний описаны максимально подробно. Господа, перспективное планирование обеспечивает широкому кругу (специалистов) участие в формировании кластеризации усилий. В своём стремлении повысить качество жизни, они забывают, что новая модель организационной деятельности является качественно новой ступенью новых предложений. Равным образом, высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке как самодостаточных, так и внешне зависимых концептуальных решений. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: перспективное планирование напрямую зависит от экспериментов, поражающих по своей масштабности и грандиозности. Ясность нашей позиции очевидна: убеждённость некоторых оппонентов говорит о возможностях кластеризации усилий! Картельные сговоры не допускают ситуации, при которой стремящиеся вытеснить традиционное производство, нанотехнологии обнародованы. Вот вам яркий пример современных тенденций — современная методология разработки требует определения и уточнения поэтапного и последовательного развития общества. Современные технологии достигли такого уровня, что укрепление и развитие внутренней структуры предполагает независимые способы реализации распределения внутренних резервов и ресурсов.";
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
