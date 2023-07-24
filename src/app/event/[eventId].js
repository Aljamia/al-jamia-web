// pages/event/[eventId].js
import axios from "axios";

const EventDetails = ({ event }) => {
  console.log("data is fetching",event);
  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { eventId } = context.query;
  try {
    const response = await axios.get(
      `https://website-builder-api.azurewebsites.net/api/v1/news/${eventId}`
    );
    const event = response.data.response;
    return {
      props: { event },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}

export default EventDetails;
