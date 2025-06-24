'use client'

import { Calendar } from 'react-big-calendar'
import localizer from '@/lib/calendarLocalizer'
import { useState } from 'react'
import { addHours, startOfDay } from 'date-fns'
import { EventModal } from '@/components/Calendar/EventModal'
import { CustomEvent } from '@/components/Calendar/CustomEvent'
// import 'react-big-calendar/lib/css/react-big-calendar.css'
import Sidebar from '@/components/Sidebar'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import TerapisView from '@/components/Calendar/TerapisView'
import { div, main } from 'framer-motion/client'

type EventType = {
  title: string
  start: Date
  end: Date
}

export default function JadwalPage() {
  const [events] = useState<EventType[]>([
    {
      title: 'Pasien: Benny - DR. ABC',
      start: addHours(startOfDay(new Date()), 8),
      end: addHours(startOfDay(new Date()), 9),
    },
    {
      title: 'Pasien: Beasdsanny - DR. ABC',
      start: addHours(startOfDay(new Date()), 8),
      end: addHours(startOfDay(new Date()), 9),
    },
    {
      title: 'Pasien: Nina - DR. Budi',
      start: addHours(startOfDay(new Date()), 11),
      end: addHours(startOfDay(new Date()), 12),
    },
    {
      title: 'Pasien: Nina - DR. Budi',
      start: addHours(startOfDay(new Date()), 12),
      end: addHours(startOfDay(new Date()), 13),
    },
    {
      title: 'Pasien: Nina - DR. Budi',
      start: addHours(startOfDay(new Date()), 14),
      end: addHours(startOfDay(new Date()), 15),
    },
  ])

  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleSelectEvent = (event: EventType) => {
    setSelectedEvent(event)
    setModalOpen(true)
  }

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Jadwal</h1>
      </div>
      <Tabs defaultValue="calendar" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="terapis">Terapis</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar">
          {/* Konten kalender kamu */}
          <Calendar
            className='bg-white p-4 border-gray-200 rounded-md shadow-md'
            localizer={localizer}
            events={events}
            style={{ height: 600 }}
            defaultView="week"
            views={[ 'month','week', 'day', 'agenda']}
            onSelectEvent={handleSelectEvent}
            components={{
              event: CustomEvent,
            }}
          />
          <EventModal
            isOpen={modalOpen}
            event={selectedEvent}
            onClose={() => setModalOpen(false)}
          />
        </TabsContent>

        <TabsContent value="terapis">
          <TerapisView />
        </TabsContent>
      </Tabs>
    </main>
  )
}