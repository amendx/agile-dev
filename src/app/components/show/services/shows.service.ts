import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { globals } from 'src/app/utils/global'


@Injectable({
  providedIn: 'root'
})
export class ShowsService {


  constructor(private http: HttpClient) {
  }


  getAll(): Observable<any> {
    return this.http.get<any>(`https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json`);
  }
}