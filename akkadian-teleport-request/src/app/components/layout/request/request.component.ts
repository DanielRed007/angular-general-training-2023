import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  personalInfo = this.fb.group({
    name  : ['', Validators.required],
    lastname: ['', Validators.required],
    akkadianId: ['', Validators.required],
    passportNumber: ['', Validators.required],
    planetOrigin: ['', Validators.required]
  });

  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });

  onSubmit() {
    console.log("submit!");
  }
}
