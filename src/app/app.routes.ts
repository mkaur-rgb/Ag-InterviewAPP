import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { QuestionsComponent } from './questions/questions.component';
import { MultiselectQuestionsComponent } from './multiselect-questions/multiselect-questions.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'select-topic', component: MultiselectQuestionsComponent },
  { path: 'about', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'questions', component: QuestionsComponent },
];
