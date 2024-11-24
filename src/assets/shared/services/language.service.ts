import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private  languageSource: BehaviorSubject<string> = new BehaviorSubject<string>('en');
   currentLanguage$ = this.languageSource.asObservable();

   setLanguage(language: string | null) {
    if (language) {
      this.languageSource.next(language);
    } else {
      // Handling null value, e.g., set a default language
      this.languageSource.next('HTML'); // Or your desired default language
    }
   }

   getTopics(language: string): Observable<string[]> {
    debugger;
     if (language === 'HTML5') {
       return of(['Basic Interview Questions', 'Part 2']);
     } else if (language === 'CSS') {
       return of(['Basics', 'Advanced Concepts CSS3', 'Science des Données']);
     } else if (language === 'Javascript') {
      return of(['Basic', 'Intermediate', 'Advanced']);
     }
    else {
       return of(['Basics','RXjs','State Management','Security General','Observables','Routing','Component Design','Build and Prod']);
     }

   }

  constructor() { }
}
