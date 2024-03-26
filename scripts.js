function getCurrentTimestamp() {
  const resultButton = document.getElementById(
    "result-button-get-current-timestamp",
  );

  const currentTimestamp = Math.floor(Date.now() / 1000);

  resultButton.textContent = currentTimestamp;
  return currentTimestamp;
}

function convertTimestampToDate(timestamp) {
  const resultButton = document.getElementById(
    "result-button-convert-timestamp-to-date",
  );
  const timestampInput = document.getElementById(
    "input-convert-timestamp-to-date",
  );

  const date = new Date(parseInt(timestampInput.value) * 1000);
  const localizedDate = date.toLocaleString().replace(",", "");

  resultButton.textContent = localizedDate;
  return localizedDate;
}

function convertDateToTimestamp() {
  const resultButton = document.getElementById(
    "result-button-convert-date-to-timestamp",
  );
  const timestampInput = document.getElementById(
    "input-convert-date-to-timestamp",
  );

  const formattedDate = new Date(
    timestampInput.value.replace("p.m.", "PM").replace("a.m.", "AM"),
  );
  const timestamp = formattedDate.getTime() / 1000;

  if (Number.isNaN(timestamp)) {
    return alert("Please enter a valid date!");
  }

  resultButton.textContent = timestamp;
}

const resultButtons = document.querySelectorAll(".result-button");

resultButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = button.querySelector(".result-text").textContent;
    copyTextToClipboard(result);
  });
});

function copyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
