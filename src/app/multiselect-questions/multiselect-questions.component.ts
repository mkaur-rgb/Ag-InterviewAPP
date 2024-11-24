import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
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
  templateUrl: './multiselect-questions.component.html',
  styleUrl: './multiselect-questions.component.scss',
})
export class MultiselectQuestionsComponent {
  form;
  topics$: Observable<Language[] | null>;

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
    alert(JSON.stringify(this.form.value));
  }
  // clearForm() {
  //   this.form.reset();
  //   this.form.patchValue({
  //     language: null,
  //     topic: null,
  //   });
  // }
}
