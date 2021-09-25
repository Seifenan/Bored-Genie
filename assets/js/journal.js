var journalEntryEl = document.querySelector('#journal');
var submitButtonEl = document.querySelector('#submit');
function lastJournalEntry() {
    var journalEntry = localStorage.getItem('journalLog');
    if (journalEntry === null) {
        return;
    }
    journalEntryEl.textContent = journalEntry;
}
lastJournalEntry();
submitButtonEl.addEventListener('click', function (event) {
    event.preventDefault();
    var journalEntry = document.querySelector('#journal').value;
    localStorage.setItem('journalLog', journalEntry);
    lastJournalEntry();
});