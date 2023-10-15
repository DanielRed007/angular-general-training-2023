import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, map } from 'rxjs';
import { PersonalInfo, DestinationInfo, Request } from "../interfaces/request";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private requestsUrl = 'assets/mock/requests.json';
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

  private requestList: Subject<any[]> = new Subject<any[]>();

  _personalInfo$ = this.personalInfo.asObservable();
  _destinationInfo$ = this.destinationInfo.asObservable();
  _requestList$ = this.requestList.asObservable();

  constructor(private http: HttpClient) {}

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.requestsUrl);
  }

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
    console.log({latestValue})
    this.requestList.next(latestValue);
  }

  deleteRequestList(){
    this.requestList.unsubscribe();
  }
}
