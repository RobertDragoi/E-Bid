export const convertDate = (dateStr) => {
  const d = new Date(dateStr);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  const year = d.getFullYear().toString();
  let hours = d.getHours().toString();
  let minutes = d.getMinutes().toString();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;
  if (hours.length < 2) hours = `0${hours}`;
  if (minutes.length < 2) minutes = `0${minutes}`;
  return `${[day, month, year].join("/")} ${[hours, minutes].join(":")}`;
};
