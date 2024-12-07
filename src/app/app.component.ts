import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from '../app/theme-toggle-component/theme-toggle-component.component';
import { CommonModule } from '@angular/common';
import { MultiselectQuestionsComponent } from './multiselect-questions/multiselect-questions.component';
import { MultiselectComponent } from './multiselect-language-topic/multiselect-language-topic.component';
import { QuestionCountComponent } from './question-count/question-count.component';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-multiselect-questions
      (dataEvent)="receiveData($event)"
    ></app-multiselect-questions>
    <div *ngIf="isSubmitted">
      <app-questions [selectedData]="selectedData"></app-questions>
    </div>
  `,
  imports: [
    RouterOutlet,
    ThemeToggleComponent,
    FormsModule,
    MultiselectQuestionsComponent,
    MultiselectComponent,
    QuestionCountComponent,
    RouterModule,
    CommonModule,
    QuestionsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('theme-toggle') myTemplate!: TemplateRef<any>;
  @ViewChild('multiselectQuestions')
  multiselectQuestions!: MultiselectQuestionsComponent;
  themeLabel = 'Switch to Dark Theme';
  isDarkTheme = false;
  private darkThemeClass = 'dark-theme';
  form: any;
  constructor(private injector: Injector) {}
  isSubmitted = false;
  selectedData: { language: string; topic: string } = {
    language: '',
    topic: '',
  };
  receiveData(data: { language: string; topic: string }) {
    try {
      this.selectedData = data;
      debugger;
      this.isSubmitted = true;
      console.log(
        this.selectedData.language,
        this.selectedData.topic + ' . Received value'
      );
    } catch (error) {
      console.error('Error receiving data:', error);
    }
  }
}
