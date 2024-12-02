import {
  Component,
  EventEmitter,
  Injector,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, filter, of, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
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
  template: `<app-multiselect-questions
      (dataEvent)="receiveData($event)"
    ></app-multiselect-questions>
    <p>{{ datafromchild }}</p>
    <button (click)="submit()" (dataEvent)="receiveData($event)">
      Send Data
    </button>`,
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
  @Output() dataEvent = new EventEmitter<{ language: string; topic: string }>();
  @ViewChild('theme-toggle') myTemplate!: TemplateRef<any>;
  @ViewChild('multiselectQuestions')
  multiselectQuestions!: MultiselectQuestionsComponent;
  themeLabel = 'Switch to Dark Theme';
  isDarkTheme = false;
  private darkThemeClass = 'dark-theme';
  form: any;
  constructor(private injector: Injector) {}
  dataFromChild: { language: string; topic: string } = {
    language: '',
    topic: '',
  };
  isSubmitted = false;
  receiveData(data: { language: string; topic: string }) {
    this.dataFromChild = data;
    this.isSubmitted = true;
    console.log(this.dataFromChild.language, this.dataFromChild.topic);
  }

  // if (this.dataFromChild.language === 'HTML') {
  //   return of(['Basic Interview Questions', 'Part 2']);
  // } else if (language === 'CSS') {
  //   return of(['Basics', 'Advanced Concepts CSS3', 'Science des Données']);
  // } else if (language === 'Javascript') {
  //   return of(['Basic', 'Intermediate', 'Advanced']);
  // } else {
  //   return of([
  //     'Basics',
  //     'RXjs',
  //     'State Management',
  //     'Security General',
  //     'Observables',
  //     'Routing',
  //     'Component Design',
  //     'Build and Prod',
  //   ]);
  // }
}
