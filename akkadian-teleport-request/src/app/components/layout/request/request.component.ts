import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from "../../../services/request.service";
import { PersonalInfo, DestinationInfo } from 'src/app/interfaces/request';
import { Subscription } from 'rxjs';
import { locations } from 'src/app/mock/mock.data';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {
  isRoundTrip: boolean = false;
  personalInfo: any;
  destinationInfo: any;
  personalSubscription: Subscription = new Subscription();
  destinationSubscription: Subscription = new Subscription();
  locations = locations;
  @Output() newRequest = new EventEmitter<void>();
  request = {
    name: "",
    lastname: "",
    akkadianId: "",
    passportNumber: "",
    planetOrigin: "",
    origin: "",
    destination: "",
    roundTrip: false,
    departureDate: null,
    returnDate: null,
  } 

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService,
    public dialog: MatDialog
  ) {
    
  }

  ngOnInit(){
    this.personalSubscription = this.requestService._personalInfo$.subscribe(info => {
      this.setPersonalInfo(info);
    });

    this.destinationSubscription = this.requestService._destinationInfo$.subscribe(destination => {
      this.setDestinationInfo(destination);
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  setPersonalInfo(personal: PersonalInfo){
    this.personalInfo = this.fb.group({
      name  : [personal.name, Validators.required],
      lastname: [personal.lastname, Validators.required],
      akkadianId: [personal.akkadianId, Validators.required],
      passportNumber: [personal.akkadianId, Validators.required],
      planetOrigin: [personal.planetOrigin, Validators.required]
    });
  }

  setDestinationInfo(destination: DestinationInfo){
    this.destinationInfo = this.fb.group({
      origin: [destination.origin, Validators.required],
      destination: [destination.destination, Validators.required],
      roundTrip: [destination.roundTrip, Validators.required],
      departureDate: [destination.departureDate, Validators.required],
      returnDate: [destination.returnDate]
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
    const personal = this.personalInfo.value;
    const destination = this.destinationInfo.value;

    this.requestService.setNewRequest({...personal, ...destination});
    this.requestService.setPersonalInfo(personal);
    this.requestService.setDestinationInfo(destination);
  }

  ngOnDestroy(){
    this.personalSubscription.unsubscribe();
    this.destinationSubscription.unsubscribe();
  }
}
