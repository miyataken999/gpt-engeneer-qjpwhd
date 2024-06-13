/**
 * Reads data from a Google Sheet and creates events in a Google Calendar.
 */

// Set up the spreadsheet and calendar
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var sheet = spreadsheet.getActiveSheet();
var calendarId = 'your_calendar_id';

// Set up the calendar service
var calendar = CalendarApp.getCalendarById(calendarId);

// Function to create events from sheet data
function createEventsFromSheet() {
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  // Loop through the data and create events
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var startDate = row[1];
    var endDate = row[2];
    var description = row[3];
    
    // Create the event
    var event = calendar.createEvent(title, startDate, endDate, description);
  }
}

// Function to test the createEventsFromSheet function
function testCreateEventsFromSheet() {
  createEventsFromSheet();
}