function getCurrentTimestamp() {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return currentTimestamp;
}

function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString().replace(",", "");
}

function convertDateToTimestamp(dateString) {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/');
    const [hours, minutes, seconds] = timePart.split(':');

    const formattedDate = new Date(year, month, day, hours, minutes, seconds);
    const timestamp = Math.floor(formattedDate.getTime() / 1000);

    return timestamp;
}

document.addEventListener('DOMContentLoaded', function() {
    const currentTimestampButton = document.querySelector('#current-timestamp .get-timestamp-button');
    const currentTimestampResult = document.querySelector('#current-timestamp .results');

    const convertToDateFormatButton = document.querySelector('#convert-to-date .convert-to-date-button');
    const convertToDateFormatResult = document.querySelector('#convert-to-date .results');

    const convertToTimestampButton = document.querySelector('#convert-to-timestamp .convert-to-timestamp-button');
    const convertToTimestampResult = document.querySelector('#convert-to-timestamp .results');

    currentTimestampButton.addEventListener('click', function() {
        const currentTimestamp = getCurrentTimestamp();
        currentTimestampResult.textContent = currentTimestamp;
    });

    convertToDateFormatButton.addEventListener('click', function() {
        const timestampInput = document.querySelector('#convert-to-date .timestamp-input').value;
        const date = convertTimestampToDate(timestampInput);
        convertToDateFormatResult.textContent = date;
    });

    convertToTimestampButton.addEventListener('click', function() {
        const dateInput = document.querySelector('#convert-to-timestamp .date-input').value;
        const timestamp = convertDateToTimestamp(dateInput);
        convertToTimestampResult.textContent = timestamp;
    });

    const resultButtons = document.querySelectorAll('.results-button');

    resultButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const result = button.querySelector('.results').textContent;
            copyTextToClipboard(result);
        });
    });

    function copyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
});
