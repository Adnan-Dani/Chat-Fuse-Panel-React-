function formatTime(timeData) {
  const unixTimestamp = timeData._seconds;
  const nanoseconds = timeData._nanoseconds / 1000000; // Convert nanoseconds to milliseconds
  const milliseconds = unixTimestamp * 1000 + nanoseconds;
  const date = new Date(milliseconds);
  const formattedDate = date.toLocaleString();
  return formattedDate;
}
export default formatTime;
