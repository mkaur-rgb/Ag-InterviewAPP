import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
interface Question {
  title: string;
  description: string;
}
@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  questions: Question[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Question[]>('assets/htmlQuestions.json').subscribe((data) => {
      this.questions = data;
    });
  }
}
