export interface Ticket {
  id: number | string;
}

export type TicketDataTypeResp = {
  getTickets : {
    items: Ticket[]
  }
}

export function createTicket(params: Partial<Ticket>) {
  return {

  } as Ticket;
}
