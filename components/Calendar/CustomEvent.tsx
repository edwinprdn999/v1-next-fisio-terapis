export function CustomEvent({ event }: { event: any }) {
  const start = new Date(event.start)
  const end = new Date(event.end)

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

  return (
    <div className="p-2 rounded-md h-full w-full flex flex-col justify-center text-white overflow-hidden">
      {/* <div className="text-xs font-bold leading-tight">
        {`${formatTime(start)} - ${formatTime(end)}`}
      </div> */}
      <div className="text-xs truncate">{event.title}</div>
    </div>
  )
}