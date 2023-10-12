import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { TicketsStore, TicketsState } from './tickets.store';
import {HttpClient} from "@angular/common/http";
import {GET_TICKETS} from "../../graphql/graphql.queries";
import { Apollo } from 'apollo-angular';
import {Ticket, TicketDataTypeResp} from "./ticket.model";

@Injectable({ providedIn: 'root' })
export class TicketsService extends NgEntityService<TicketsState> {
  tickets: any[] = [];
  error: any;

  constructor(
    protected override store: TicketsStore,
    private apollo: Apollo
  ) {
    super(store);
  }

  getTickets() {
    return this.apollo.watchQuery<TicketDataTypeResp>({
      query: GET_TICKETS
    }).valueChanges.subscribe(({ data, error }: any) => {
        this.store.update({tickets: data.getTickets.items});
        // this.tickets = data.getTickets.items;
        // this.error = error;
      }
    );
  }

}
