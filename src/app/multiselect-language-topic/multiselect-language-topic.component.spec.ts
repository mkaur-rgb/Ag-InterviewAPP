import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectLanguageTopicComponent } from './multiselect-language-topic.component';

describe('MultiselectLanguageTopicComponent', () => {
  let component: MultiselectLanguageTopicComponent;
  let fixture: ComponentFixture<MultiselectLanguageTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiselectLanguageTopicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiselectLanguageTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
