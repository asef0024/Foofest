import { useState, useEffect } from "react";
import ScheduleDetails from "../../schedule/ScheduleDetails";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [midgardFilter, setMidgardFilter] = useState([]);
  const [jotunFilter, setJotunFilter] = useState([]);
  const [vanaFilter, setVanaFilter] = useState([]);
  // const [bands, setBands] = useState([]);
  // const [events, setEvents] = useState([]);

  // Fetching bands, schedule and events data:
  useEffect(() => {
    async function get() {
      // const resBands = await fetch("https://prototype-masters-foofest.herokuapp.com/bands");
      // const bandsData = await resBands.json();
      // setBands(bandsData);
      // // console.log("bandsdata:", bandsData);
      // const resEvents = await fetch("https://prototype-masters-foofest.herokuapp.com/events");
      // const eventsData = await resEvents.json();
      // setEvents(eventsData);
      // // console.log("eventsData:", eventsData);
    }
    get();
    async function getSchedule() {
      const resSchedule = await fetch("https://prototype-masters-foofest.herokuapp.com/schedule");
      const scheduleData = await resSchedule.json();
      setSchedule(scheduleData);
      // console.log("scheduleData:", scheduleData);
      setMidgardFilter(scheduleData.Midgard.mon);
      setJotunFilter(scheduleData.Jotunheim.mon);
      setVanaFilter(scheduleData.Vanaheim.mon);
    }
    getSchedule();
  }, []);

  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  // const days2 = [
  //   { day: "monday", midgardFilter, jotunFilter, vanaFilter },
  //   { day: "tuesday", midgardFilter, jotunFilter, vanaFilter },
  //   { day: "wednesday", midgardFilter, jotunFilter, vanaFilter },
  //   { day: "thursday", midgardFilter, jotunFilter, vanaFilter },
  //   { day: "friday", midgardFilter, jotunFilter, vanaFilter },
  //   { day: "saturday", midgardFilter, jotunFilter, vanaFilter },
  //   { day: "sunday", midgardFilter, jotunFilter, vanaFilter },
  // ];

  return (
    <>
      <h1>Schedule</h1>
      {days.map((daySchedule) => (
        <ScheduleDetails
          key={Math.random()}
          schedule={schedule}
          daySchedule={daySchedule}
          midgardFilter={midgardFilter}
          jotunFilter={jotunFilter}
          vanaFilter={vanaFilter}
          setMidgardFilter={setMidgardFilter}
          setJotunFilter={setJotunFilter}
          setVanaFilter={setVanaFilter}
        />
      ))}
    </>
  );
}
