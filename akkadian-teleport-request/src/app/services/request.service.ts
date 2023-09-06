import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { PersonalInfo, DestinationInfo, Request } from "../interfaces/request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private personalInfo: BehaviorSubject<PersonalInfo> = new BehaviorSubject({
    name: "",
    lastname: "",
    akkadianId: "",
    passportNumber: "",
    planetOrigin: ""
  });

  private destinationInfo: BehaviorSubject<DestinationInfo>  = new BehaviorSubject({
    origin: "",
    destination: "",
    roundTrip: "",
    departureDate: "",
    returnDate: ""
  });

  private requestList: BehaviorSubject<any[]> = new BehaviorSubject([{}]);

  _personalInfo$ = this.personalInfo.asObservable();
  _destinationInfo$ = this.destinationInfo.asObservable();
  _resquestList$ = this.requestList.asObservable();

  getPersonalInfo(): Observable<PersonalInfo>{
    return this._personalInfo$;
  }

  getDestinationInfo(): Observable<DestinationInfo>{
    return this._destinationInfo$;
  }

  setPersonalInfo(latestValue: PersonalInfo){
    console.log(latestValue, "personal");
    return this.personalInfo.next(latestValue);
  }

  setDestinationInfo(latestValue: DestinationInfo){
    console.log(latestValue, "destination");
    return this.destinationInfo.next(latestValue);
  }
}
