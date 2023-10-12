import { Component, OnInit } from '@angular/core';
import { TicketsHolderComponent } from "../tickets-holder/tickets-holder.component";
import { Apollo } from 'apollo-angular';
import { GET_TICKETS } from '../../graphql/graphql.queries';
import {TicketsService} from "../state/tickets.service";


@Component({
  selector: 'app-tickets-page',
  templateUrl: './tickets-page.component.html',
  styleUrls: ['./tickets-page.component.scss']
})
export class TicketsPageComponent implements OnInit {
  tickets: any[] = [];
  error: any;

  constructor(
    private apollo: Apollo,
    private ticketsService: TicketsService,
  ) { }

  ngOnInit(): void {
    // this.apollo.watchQuery({
    //   query: GET_TICKETS
    // }).valueChanges.subscribe(({ data, error }: any) => {
    //     this.tickets = data.getTickets.items;
    //     this.error = error;
    //   }
    // );
    this.ticketsService.getTickets();
  }

}
