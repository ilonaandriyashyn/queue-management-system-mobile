import React from 'react'
import { type TicketNullable as TicketType } from '../../types'
import { TicketState } from '../../helpers/consts'
import TicketProcessingAlert from '../TicketProcessingAlert'
import NoTicketContent from './NoTicketContent'
import TicketCreatedContent from './TicketCreatedContent'

interface TicketProps {
  ticket: TicketType
  ticketsNum: number
  serviceId: string
}

export default function Ticket({ ticket, ticketsNum, serviceId }: TicketProps) {
  if (ticket === null) {
    return <NoTicketContent ticketsNum={ticketsNum} serviceId={serviceId} />
  }

  if (ticket.state === TicketState.CREATED) {
    return <TicketCreatedContent ticketsNum={ticketsNum - 1} ticket={ticket} />
  }

  if (ticket.state === TicketState.PROCESSING && ticket.counter !== null) {
    return <TicketProcessingAlert ticketNumber={ticket.ticketNumber} counterName={ticket.counter?.name} />
  }

  return null
}
