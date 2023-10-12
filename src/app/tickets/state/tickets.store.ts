import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Ticket } from './ticket.model';

export interface TicketsState extends EntityState<Ticket> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'tickets'
})
export class TicketsStore extends EntityStore<TicketsState> {

  constructor() {
    super([]);
  }

}
