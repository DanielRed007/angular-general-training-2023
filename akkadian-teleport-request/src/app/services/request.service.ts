import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonalInfo, Request } from "../interfaces/request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private personalInfo = new BehaviorSubject<PersonalInfo>({
    name: "",
    lastname: "",
    akkadianId: "",
    passportNumber: "",
    planetOrigin: ""
  });

  _personalInfo$ = this.personalInfo.asObservable();

  getPersonalInfo(): Observable<PersonalInfo>{
    return this._personalInfo$;
  }

  setPersonalInfo(latestValue: PersonalInfo){
    console.log(latestValue, "val");
    return this.personalInfo.next(latestValue);
  }
}
