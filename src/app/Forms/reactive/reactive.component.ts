import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
  standalone: true,
  imports: [],
})
export class ReactiveComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(1)  // Changed from Validators.min(1)
      ]),
      lastName: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}

