import axios from "axios";
import Link from "next/link";

const events = [
  { _id: "event1", title: "Event 1", description: "Description of Event 1" },
  { _id: "event2", title: "Event 2", description: "Description of Event 2" },
  // Add more events as needed
];

function HomePage(callDate) {
  console.log({ callDate });
  const response = axios.get(
    `https://aljamia-hgtgv.ondigitalocean.app/api/v1/news${eventId}`
  );

  return (
    <div>
      <h1>Welcome to the Events Page01</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <Link href={`/event/${event._id}`}>
              <a>{event.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
