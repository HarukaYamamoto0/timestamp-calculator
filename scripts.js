const minWidth = 768; // Minimum width for desktop devices
const isDesktop = window.innerWidth > minWidth || screen.width > minWidth;

if (isDesktop)
  alert(
    "Note: This site is optimized for mobile phones only. Sorry if you have it on the computer.",
  );

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

  const date = new Date(parseInt(timestamp || timestampInput.value) * 1000);
  const localizedDate = date
    .toLocaleString("sv", { timeZoneName: "short" })
    .replace(",", "");

  resultButton.textContent = localizedDate;
  return localizedDate;
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
