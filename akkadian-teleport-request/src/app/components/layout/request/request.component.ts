import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {
  isRoundTrip: boolean = false;

  personalInfo = this.fb.group({
    name  : new FormControl(),
    lastname: ['', Validators.required],
    akkadianId: ['', Validators.required],
    passportNumber: ['', Validators.required],
    planetOrigin: ['', Validators.required]
  });

  destinationInfo = this.fb.group({
    origin: ['', Validators.required],
    destination: ['', Validators.required],
    roundTrip: [false, Validators.required],
    departureDate: ['', Validators.required],
    returnDate: ['']
  });

  constructor(private fb: FormBuilder) {
    this.destinationInfo.valueChanges.subscribe(values => {
      this.formTracker(values);
    });

    this.personalInfo.valueChanges.subscribe(values => {
      this.formTracker(values);
    });
  }

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

  ngOnInit() {}

  onSubmit() {
    console.log("submit!");
  }

  checkboxChanged(event: any) {
    this.isRoundTrip = event.checked;
  }

  formTracker(value: any){
    console.log(value, "from  outside");
  }
}
