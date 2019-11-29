import { Injectable } from '@angular/core';
import { INotebookCard } from 'src/app/models/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    console.log('Api Service init...');
    this.baseUrl = 'http://localhost:3000/';
  }

  getAllNotebooks(): Observable<Array<INotebookCard>> {
    return this.http.get<Array<INotebookCard>>(`${this.baseUrl}notebooks`);
  }
}
