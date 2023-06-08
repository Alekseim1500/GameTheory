import { Injectable } from '@angular/core';
import { UserInfo } from '../interfces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ControlService {
    constructor(private http: HttpClient) { }

  createChapter(title: string): any{
        return this.http.post<any>('http://localhost:9999/api/Chapters', {"title": title, "description": 'Description', "order":1})
  }

  deleteChapter(id: number): any{
      return this.http.delete<any>('http://localhost:9999/api/Chapters/'+ id)
  }

  addLecture(chapterId: number, title: string): any{
    return this.http.post<any>('http://localhost:9999/api/Lectures', {"chapterId": chapterId, "title": title, "order": 1})
  }

  addLectureFile(id:number,file: File): any{
    const fd = new FormData()
    fd.append('file',file,file.name)
    return this.http.post<any>('http://localhost:9999/api/Lectures/'+id+'/file', fd)
  }

  deleteLecture(id: number): any{
    return this.http.delete<any>('http://localhost:9999/api/Lectures/' + id)
  }


}
