import { Injectable } from '@angular/core';
import { UserInfo } from '../interfces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
    constructor(private http: HttpClient) { }

    getChapters(): any{
        return this.http.get <any>('http://localhost:9999/api/Chapters')
    }

    getLecture(id: number): any{
        return this.http.get <any>('http://localhost:9999/api/Lectures/'+id)
    }

    getTests(id: number): any{
        return this.http.get <any>('http://localhost:9999/api/Chapters/'+id+'/tests')
    }

    getLectureFile(id: number): any{
        return this.http.get <any>('http://localhost:9999/api/Lectures/'+id+'/file')
    }


}
