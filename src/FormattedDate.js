export default function FormattedDate(props) {
  console.log(props.date);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) hours = `0${hours}`;

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  // if (minutes<10) minutes = `0${minutes}`;

  let todaysDate = props.date.getDate();
  let month = months[props.date.getMonth()];

  let currentDate = `${todaysDate} ${month}`;
  return (
    <div>
      {" "}
      {currentDate}, {day}
      <br />
      Local Time: {hours}:{minutes}{" "}
    </div>
  );
}
