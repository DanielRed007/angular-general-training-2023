import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      selectOption1: ['', Validators.required],
      selectOption2: ['', Validators.required],
      stringField1: ['', Validators.required],
      stringField2: ['', Validators.required],
      numericIntegerField: ['', Validators.required],
      currencyField: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Do something with the form data
      console.log(this.myForm.value);
    }
  }

}
