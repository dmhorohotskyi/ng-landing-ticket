import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsPageComponent } from './tickets-page/tickets-page.component';
import { TicketsHolderComponent } from './tickets-holder/tickets-holder.component';

@NgModule({
  declarations: [
    TicketsPageComponent,
    TicketsHolderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TicketsPageComponent,
    TicketsHolderComponent
  ]
})
export class TicketsModule { }
