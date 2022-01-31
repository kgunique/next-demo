import { useRouter } from "next/router";
import { useState } from "react";

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=Sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=Sports", undefined, { shallow: true });
  };

  const fetchTechsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=Technology"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=Technology", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <button onClick={fetchTechsEvents}>Tech Events</button>

      <h1>List Of Events</h1>
      {events.map((events) => {
        return (
          <div key={events.id}>
            <h2>
              {events.id}
              {events.title}
              {events.date}|{events.category}
            </h2>
            <p>{events.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default EventList;
export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category = Sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventList: data,
    }, // will be passed to the page component as props
  };
}
