import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit{
  requestList: any[] = [];
  personalSubscription: Subscription = new Subscription();
  showList = this.requestList.length > 0;

  constructor(private requestService: RequestService){
  }

  ngOnInit(): void {
    this.requestService.getNewRequest().subscribe(req => {
      console.log({request: req});
      this.requestList.push(req);
    });
  }
  
}
