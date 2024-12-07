import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { citiesByCountry } from '../../assets/languageTopicsData';
import { CommonModule } from '@angular/common';
interface Province {
  name: string;
  cities: string[];
}
export interface CityCountry {
  name: string;
  provinces: Province[];
}

@Component({
  selector: 'app-multiselect-language-topic',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './multiselect-language-topic.component.html',
  styleUrl: './multiselect-language-topic.component.scss',
})
export class MultiselectComponent {
  form;
  countries$: Observable<CityCountry[] | null>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      country: this.fb.control<string | null>(null, Validators.required),
      province: this.fb.control<string | null>(null, Validators.required),
      city: this.fb.control<string | null>(null, Validators.required),
    });

    this.countries$ = of(citiesByCountry);
    this.form.get('country')?.valueChanges.subscribe(() => {
      this.form.patchValue({
        city: null,
        province: null,
      });
    });
    this.form.get('province')?.valueChanges.subscribe(() => {
      this.form.patchValue({
        city: null,
      });
    });
  }
  get provincesByCountry() {
    return citiesByCountry.filter(
      (c) => c.name === this.form.get('country')?.value
    )[0]?.provinces;
  }
  get citiesByProvince() {
    return this.provincesByCountry?.filter(
      (c) => c.name === this.form.get('province')?.value
    )[0]?.cities;
  }

  submit() {
    alert(JSON.stringify(this.form.value));
  }
}
