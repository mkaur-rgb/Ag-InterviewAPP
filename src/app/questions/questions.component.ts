import { Component, Input, SimpleChanges } from '@angular/core';
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
  @Input() selectedData: { language: string; topic: string } = {
    language: '',
    topic: '',
  };
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchData();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedData'] && !changes['selectedData'].firstChange) {
      this.fetchData();
    }
  }
  fetchData() {
    const filePath = `assets/${this.selectedData.language.toLowerCase()}.json`;
    this.http.get<Question[]>(filePath).subscribe({
      next: (data) => {
        this.questions = data;
      },
      error: (error) => {
        console.error('Error fetching questions:', error);
      },
    });
  }
}
