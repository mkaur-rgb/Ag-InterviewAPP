import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectQuestionsComponent } from './multiselect-questions.component';

describe('MultiselectQuestionsComponent', () => {
  let component: MultiselectQuestionsComponent;
  let fixture: ComponentFixture<MultiselectQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiselectQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiselectQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
