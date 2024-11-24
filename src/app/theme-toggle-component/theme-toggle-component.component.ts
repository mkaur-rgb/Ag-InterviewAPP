import { Component, inject } from '@angular/core';
import { ThemeService } from '../../assets/shared/services/theme.service';

@Component({
  selector: 'app-theme-toggle-component',
  standalone: true,
  imports: [],
  styleUrl: './theme-toggle-component.component.scss',
  template: `
    <button
      id="theme-toggle"
      class="btn btn-secondary"
      (click)="switchTheme()"
      [class.dark-theme]="isDarkThemeActive()"
    >
      {{ getThemeToggleLabel() }}
    </button>
  `,
})
export class ThemeToggleComponent {
  #theme: ThemeService = inject(ThemeService);

  switchTheme(): void {
    this.#theme.toggleTheme();
  }

  isDarkThemeActive(): boolean {
    return this.#theme.isDarkThemeActive();
  }

  getThemeToggleLabel(): string {
    return this.#theme.getToggleLabel();
  }
}
