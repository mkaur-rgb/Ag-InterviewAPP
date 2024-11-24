import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, filter, of, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from '../app/theme-toggle-component/theme-toggle-component.component';
import { CommonModule } from '@angular/common';
import { MultiselectQuestionsComponent } from './multiselect-questions/multiselect-questions.component';
import { MultiselectComponent } from './multiselect-language-topic/multiselect-language-topic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ThemeToggleComponent,
    FormsModule,
    MultiselectQuestionsComponent,
    MultiselectComponent,
  ],
  template: ` <app-multiselect /> `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('theme-toggle') myTemplate!: TemplateRef<any>;
  themeLabel = 'Switch to Dark Theme';
  isDarkTheme = false;
  private darkThemeClass = 'dark-theme';
}
