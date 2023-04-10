export default function FormattedDate(props) {
  console.log(props.date);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
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
  if (todaysDate < 10) {
    todaysDate = `0${todaysDate}`;
  }

  let month = months[props.date.getMonth()];

  let currentDate = `${todaysDate} ${month}`;

  return (
    <div>
      {" "}
      {day}, {currentDate}
      <br />
      Local Time: {hours}:{minutes}{" "}
    </div>
  );
}
