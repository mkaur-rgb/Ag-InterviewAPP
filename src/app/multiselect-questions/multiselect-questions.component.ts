import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, from, of } from 'rxjs';
import { topicsByLanguage } from '../../assets/topicsData';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from '../questions/questions.component';
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
  imports: [ReactiveFormsModule, CommonModule, QuestionsComponent],
  templateUrl: './multiselect-questions.component.html',
  styleUrl: './multiselect-questions.component.scss',
})
export class MultiselectQuestionsComponent {
  form;
  questions: Question[] = [];
  language = '';
  topic = '';
  filePath = '';
  topics$: Observable<Language[] | null>;
  @Output() dataEvent = new EventEmitter<{ language: string; topic: string }>();
  constructor(private fb: FormBuilder) {
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
      debugger;
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
    this.form.patchValue({
      language: null,
      topic: null,
    });
  }
}
