function dateToTimestamp() {
  const startDate = document.form_main.startDate.value ?? new Date();
  const startTime  = document.form_main.startTime.value;
  
  const timestamp = new Date(`${startDate} ${startTime}`).getTime();
  document.getElementById("timestamp").innerText = timestamp;
}

function timestampToDate() {
  const startDate = new Date(
    parseInt(document.form_main.timestamp_end.value)
  );
  document.getElementById("date").innerText =
  startDate.toLocaleString("pt-BR");
}
