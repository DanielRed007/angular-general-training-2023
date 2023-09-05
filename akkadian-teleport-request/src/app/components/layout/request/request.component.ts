import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from "../../../services/request.service";
import { Request } from 'src/app/interfaces/request';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {
  isRoundTrip: boolean = false;
  personalInfo: any;
  subscription: any;

  destinationInfo = this.fb.group({
    origin: ['', Validators.required],
    destination: ['', Validators.required],
    roundTrip: [false, Validators.required],
    departureDate: ['', Validators.required],
    returnDate: ['']
  });

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService,

  ) {}

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

  ngOnInit(){
    this.subscription = this.requestService._personalInfo$.subscribe(info => {
      this.setForms(info);
    });
  }

  setForms(info: any){
    this.personalInfo = this.fb.group({
      name  : [info.name, Validators.required],
      lastname: [info.lastname, Validators.required],
      akkadianId: [info.akkadianId, Validators.required],
      passportNumber: [info.akkadianId, Validators.required],
      planetOrigin: [info.planetOrigin, Validators.required]
    });
  }

  onSubmit() {
    console.log("submit!");
  }

  checkboxChanged(event: any) {
    this.isRoundTrip = event.checked;
  }

  formTracker(value: any){
    console.log(value, "from  outside");
  }

  submitTransfer(){
    const info = this.personalInfo.value
    this.requestService.setPersonalInfo(info)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
