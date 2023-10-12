import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TicketsStore, TicketsState } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsQuery extends QueryEntity<TicketsState> {
  allState$ = this.select();

  constructor(protected override store: TicketsStore) {
    super(store);
  }

}
