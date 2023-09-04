import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Request } from "../interfaces/request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private request = new BehaviorSubject<Request>({
    name: "",
    lastname: "",
    akkadianId: "",
    passportNumber: "",
    planetOrigin: "",
    origin: "",
    destination: "",
    roundTrip: false,
    departureDate: null,
    returnDate: null
  });

  $request = this.request.asObservable();

  constructor() { }

  getSubmittedRequest(user:any){
    console.log(user);
    this.request.next(user);
  }
}
