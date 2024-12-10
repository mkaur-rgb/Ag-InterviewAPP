import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, from, of } from 'rxjs';
import { topicsByLanguage } from '../../assets/topicsData';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from '../questions/questions.component';
import { CommonService } from '../../assets/shared/services/common.service';
import { SharedModule } from '../shared/shared.module';
interface Question {
  title: string;
  description: string;
}
interface Topic {
  name: string;
}
export interface Language {
  name: string;
  topics: Topic[];
}
@Component({
  selector: 'app-multiselect-questions',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    QuestionsComponent,
    SharedModule,
  ],
  templateUrl: './multiselect-questions.component.html',
  styleUrl: './multiselect-questions.component.scss',
})
export class MultiselectQuestionsComponent {
  isSubmitted = false;
  form;
  questions: Question[] = [];
  language = '';
  topic = '';
  filePath = '';
  topics$: Observable<Language[] | null>;
  @Output() dataEvent = new EventEmitter<{ language: string; topic: string }>();
  constructor(private fb: FormBuilder, private commonService: CommonService) {
    this.form = this.fb.group({
      language: this.fb.control<string | null>(null, Validators.required),
      topic: this.fb.control<string | null>(null, Validators.required),
    });

    this.topics$ = of(topicsByLanguage);
    this.form.get('language')?.valueChanges.subscribe(() => {
      this.form.patchValue({
        topic: null,
      });
    });
  }
  get topicsByLanguage() {
    return topicsByLanguage.filter(
      (c) => c.name === this.form.get('language')?.value
    )[0]?.topics;
  }

  submit() {
    if (this.form.valid) {
      const language = this.form.value.language;
      const topic = this.form.value.topic;
      const storeLanguage = `${
        this.form.value.language ?? 'HTML'.toLowerCase()
      }`;
      const storeTopic = `${
        this.form.value.topic ?? 'Basics & Intro'.toLowerCase()
      }`;
      this.dataEvent.emit({
        language: this.form.value.language ?? '',
        topic: this.form.value.topic ?? '',
      });
    }
  }
  clearForm() {
    this.form.reset();
    localStorage.removeItem('language');
    localStorage.removeItem('topic');
    this.isSubmitted = false;
    this.form.patchValue({
      language: null,
      topic: null,
    });
    this.commonService.emitClearButtonClicked();
  }
}
