import {Component, OnInit, Output} from '@angular/core';
import {TicketsQuery} from "../state/tickets.query";
import {TicketsStore} from "../state/tickets.store";
import {skip} from "rxjs";
import {Ticket} from "../state/ticket.model";
import {log} from "util";

@Component({
  selector: 'app-tickets-holder',
  templateUrl: './tickets-holder.component.html',
  styleUrls: ['./tickets-holder.component.scss']
})
export class TicketsHolderComponent implements OnInit {
  tickets$ = this.query.select('tickets');
  @Output() update = this.tickets$
    .pipe(skip(1))
    .subscribe( );

  constructor(
    private store: TicketsStore,
    private query: TicketsQuery
  ) { }

  ngOnInit(): void {
  }

}
