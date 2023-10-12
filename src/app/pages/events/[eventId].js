import { useRouter } from "next/router";
const events = [
  { _id: "event1", title: "Event 1", description: "Description of Event 1" },
  { _id: "event2", title: "Event 2", description: "Description of Event 2" },
  // Add more events as needed
];

function EventPage() {
  const router = useRouter();
  const { eventId } = router.query;

  // Find the event based on the eventId
  const event = events.find((event) => event._id === eventId);

  if (!event) {
    // Render some error message or a fallback if the event is not found
    return (
      <div className="event_error">
        There is No Event or You are looking for the event is not Found
      </div>
    );
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
}

export default EventPage;
