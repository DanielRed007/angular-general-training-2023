import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit, OnDestroy {
  requestList: any[] = [];
  personalSubscription: Subscription = new Subscription();
  showList = this.requestList.length > 0;
  loading: boolean = false;

  constructor(private requestService: RequestService){
  }

  ngOnInit(): void {
    this.requestService.getNewRequest().subscribe(req => {
      console.log({request: req});
      this.requestList.push(req);
    });
  }

  emptyRequestList(): void{
    this.loading = true;
    
    setTimeout(() => {
      this.requestList = [];
      this.loading = false;
      this.requestService.deleteRequestList();
    },5000)
  }
  
  ngOnDestroy(): void {
    this.personalSubscription.unsubscribe();
  }
}
