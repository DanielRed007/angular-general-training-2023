import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  personalInfo = this.fb.group({
    name  : ['', Validators.required],
    lastname: ['', Validators.required],
    akkadianId: ['', Validators.required],
    passportNumber: ['', Validators.required],
    planetOrigin: ['', Validators.required]
  });

  destinationInfo = this.fb.group({
    origin: ['', Validators.required],
    destination: ['', Validators.required],
    roundTrip: [false, Validators.required],
  });

  locations = [
    {value: 'venus', viewValue: 'Venus'},
    {value: 'mercury', viewValue: 'Mercury'},
    {value: 'earth', viewValue: 'Earth'},
    {value: 'mars', viewValue: 'Mars'},
    {value: 'jupiter', viewValue: 'Jupiter'},
    {value: 'saturn', viewValue: 'Saturn'},
    {value: 'uranus', viewValue: 'Uranus'},
    {value: 'pluto', viewValue: 'Pluto'},
    {value: 'moon', viewValue: 'Moon'},
    {value: 'europe', viewValue: 'Europe'},
    {value: 'ganimedes', viewValue: 'Ganimedes'},
    {value: 'enceladus', viewValue: 'Enceladus'},
    {value: 'titan', viewValue: 'Titan'},
  ];

  ngOnInit() {
  }

  onSubmit() {
    console.log("submit!");
  }
}
