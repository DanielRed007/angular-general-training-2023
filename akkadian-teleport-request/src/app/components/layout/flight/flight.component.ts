import { Component } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import { Request } from "../../../interfaces/request";

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent {
  displayedColumns: string[] = ["name",
  "lastname",
  "akkadianId",
  "passportNumber",
  "planetOrigin",
  "origin",
  "destination"];
  dataSource: any = [];
  requests$!: Observable<Request[]>;

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.requestService.getRequests().subscribe(requests => {
      console.log(requests);
      this.dataSource = requests;
    });
  }
}
