import {gql} from 'apollo-angular'

const GET_TICKETS = gql`
  query {
  getTickets(options: {
    take: 30,
  sort: {
      startDate: DESC
    }
  }) {
    items {
      event {
        title
      }
      performance {
        title
        startDate
        endDate
      }
      ticketType {
        title
      }
      id
    }
  }
}
`

export {GET_TICKETS}
