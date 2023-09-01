import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
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
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      akkadianId: ['', Validators.required],
      gender: ['', Validators.required],
      race: ['', Validators.required],
      birthday: ['', Validators.required],
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
