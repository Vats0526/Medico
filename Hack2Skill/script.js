

const medicineForm = document.getElementById('medicine-form');
const reminderList = document.getElementById('reminder-list');
const historyList = document.getElementById('history-list');

// function to add a new reminder
function addReminder(medicineName, dosage, frequency, startDate, endDate) {
  const reminder = document.createElement('div');
  reminder.classList.add('reminder');
  reminder.innerHTML = `
    <h2>${medicineName}</h2>
    <p>Dosage: ${dosage}</p>
    <p>Frequency: ${frequency}</p>
    <p>Start Date: ${startDate}</p>
    <p>End Date: ${endDate}</p>
    <button class="delete-btn">Delete Reminder</button>
    <button class="complete-btn">Complete Reminder</button>
  `;
  reminderList.appendChild(reminder);
}



// function to add a completed reminder to the history
function addToHistory(medicineName, dosage, frequency, startDate, endDate, completedDate) {
  const reminder = document.createElement('div');
  reminder.classList.add('reminder');
  reminder.innerHTML = `
    <h2>${medicineName} - Completed</h2>
    <p>Dosage: ${dosage}</p>
    <p>Frequency: ${frequency}</p>
    <p>Start Date: ${startDate}</p>
    <p>End Date: ${endDate}</p>
    <p>Completed Date: ${completedDate}</p>
  `;
  historyList.appendChild(reminder);
}

// add a new reminder
medicineForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const medicineName = document.getElementById('medicine-name').value;
  const dosage = document.getElementById('dosage').value;
  const frequency = document.getElementById('frequency').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  addReminder(medicineName, dosage, frequency, startDate, endDate);
  medicineForm.reset();  
});

// delete a reminder
reminderList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.remove();
  }
});

// complete a reminder
reminderList.addEventListener('click', function(event) {
  if (event.target.classList.contains('complete-btn')) {
    const reminder = event.target.parentElement;
    const medicineName = reminder.querySelector('h2').textContent;
    const dosage = reminder.querySelector('p:nth-of-type(1)').textContent.substring(8);
    const frequency = reminder.querySelector('p:nth-of-type(2)').textContent.substring(11);
    const startDate = reminder.querySelector('p:nth-of-type(3)').textContent.substring(12);
    const endDate = reminder.querySelector('p:nth-of-type(4)').textContent.substring(10);
    const completedDate = new Date().toLocaleDateString();
    addToHistory(medicineName, dosage, frequency, startDate, endDate, completedDate);
    reminder.remove();
  }  
});
