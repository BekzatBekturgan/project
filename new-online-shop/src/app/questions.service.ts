import { Injectable } from '@angular/core';
import { questions } from './questions';
import { Questions } from './questioninterface';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }
  getQuestions(): Observable<Questions[]>{
    return of (questions);
   }
}
