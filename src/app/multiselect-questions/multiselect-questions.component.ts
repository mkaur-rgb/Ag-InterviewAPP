import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, from, of } from 'rxjs';
import { topicsByLanguage } from '../../assets/topicsData';
import { CommonModule } from '@angular/common';

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
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <button (click)="submit()" (dataEvent)="receiveData($event)">
      Send Data
    </button>
  `,
  templateUrl: './multiselect-questions.component.html',
  styleUrl: './multiselect-questions.component.scss',
})
export class MultiselectQuestionsComponent {
  form;
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
      const language = this.form.value.language;
      const topic = this.form.value.topic;
      localStorage.setItem('language', this.form.value.language ?? 'HTML');
      localStorage.setItem('topic', this.form.value.language ?? 'Basics');
      this.dataEvent.emit({
        language: this.form.value.language ?? '',
        topic: this.form.value.topic ?? '',
      });
    }
  }
  clearForm() {
    this.form.reset();
    localStorage.clear();
    this.form.patchValue({
      language: null,
      topic: null,
    });
  }
}
