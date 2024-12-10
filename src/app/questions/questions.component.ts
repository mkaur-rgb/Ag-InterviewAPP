import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from '../../assets/shared/services/common.service';
import { SharedModule } from '../shared/shared.module';
interface Question {
  title: string;
  description: string;
}
@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SharedModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  questions: Question[] = [];
  language = '';
  topic = '';
  filePath = '';
  isSubmitted = true;
  isShown = true; // Add a flag to control visibility
  @Input() selectedData: { language: string; topic: string } = {
    language: '',
    topic: '',
  };
  constructor(private http: HttpClient, private commonService: CommonService) {}
  ngOnInit() {
    debugger;
    this.fetchData();
    this.commonService.clearButtonClicked$.subscribe((clear) => {
      if (clear) {
        debugger;
        this.isShown = false; // Add a flag to control visibility
        console.log(this.isShown + 'question comp');
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger;
    if (changes['selectedData'] && !changes['selectedData'].firstChange) {
      this.fetchData();
    }
  }
  fetchData() {
    debugger;

    this.isShown = true;
    const filePath = `assets/${this.selectedData.language.toLowerCase()}.json`;
    console.log(filePath);
    this.http.get<Question[]>(filePath).subscribe({
      next: (data) => {
        console.log(this.questions);
        this.questions = data;
      },
      error: (error) => {
        console.error('Error fetching questions:', error);
      },
    });
  }
}
