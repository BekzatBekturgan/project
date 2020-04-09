import { Injectable } from '@angular/core';
import { questions } from './questions';
import { Questions } from './questioninterface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }
  private questionsUrl = 'api/questions';  
  getQuestions(): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionsUrl)
    .pipe(
      catchError(this.handleError<Questions[]>('getProducts', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error); 

    return of(result as T);
    };
  }
}
