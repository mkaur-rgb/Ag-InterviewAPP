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
  language = '';
  topic = '';
  filePath = '';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    console.log(localStorage.getItem('language') + 'Questions1');
    if (localStorage.getItem('language') === 'HTML') {
      this.filePath = 'assets/htmlQuestions.json';
    } else if (localStorage.getItem('language') === 'CSS') {
    } else if (localStorage.getItem('language') === 'Angular') {
      this.filePath = 'assets/angular.json';
    }
    this.http.get<Question[]>(this.filePath).subscribe((data) => {
      this.questions = data;
    });
  }
}
