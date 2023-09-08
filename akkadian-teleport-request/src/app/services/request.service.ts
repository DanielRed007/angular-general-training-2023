import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { PersonalInfo, DestinationInfo, Request } from "../interfaces/request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private personalInfo: BehaviorSubject<PersonalInfo> = new BehaviorSubject<PersonalInfo>({
    name: "",
    lastname: "",
    akkadianId: "",
    passportNumber: "",
    planetOrigin: ""
  });

  private destinationInfo: BehaviorSubject<DestinationInfo>  = new BehaviorSubject<DestinationInfo>({
    origin: "",
    destination: "",
    roundTrip: "",
    departureDate: "",
    returnDate: ""
  });

  private requestList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  _personalInfo$ = this.personalInfo.asObservable();
  _destinationInfo$ = this.destinationInfo.asObservable();
  _requestList$ = this.requestList.asObservable();

  getPersonalInfo(): Observable<PersonalInfo>{
    return this._personalInfo$;
  }

  getDestinationInfo(): Observable<DestinationInfo>{
    return this._destinationInfo$;
  }

  getNewRequest(): Observable<any>{
    return this._requestList$;
  }

  setPersonalInfo(latestValue: PersonalInfo){
    return this.personalInfo.next(latestValue);
  }

  setDestinationInfo(latestValue: DestinationInfo){
    return this.destinationInfo.next(latestValue);
  }

  setNewRequest(latestValue: Request[]){
    this.requestList.next(latestValue);
  }
}
