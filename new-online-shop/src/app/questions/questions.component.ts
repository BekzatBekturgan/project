import { Component, OnInit } from '@angular/core';
import { Questions } from '../questioninterface';
import { QuestionsService } from '../questions.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Questions[];
  constructor(private questionsService:QuestionsService) { }

  ngOnInit(): void {
    this.getQuestions();
  }
  getQuestions(): void {
    this.questionsService.getQuestions().subscribe(questions => this.questions = questions);
  }
}
