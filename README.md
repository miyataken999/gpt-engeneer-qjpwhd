# Google Apps Script Program to Create Events from Google Sheet

This program reads data from a Google Sheet and creates events in a Google Calendar.

## Setup

1. Create a new Google Sheet and add the data you want to use to create events.
2. Create a new Google Calendar and note the calendar ID.
3. Create a new Google Apps Script project and paste the code into the editor.
4. Set up the spreadsheet and calendar IDs in the code.
5. Run the `createEventsFromSheet` function to create events from the sheet data.

## Functions

* `createEventsFromSheet()`: Reads data from the sheet and creates events in the calendar.
* `testCreateEventsFromSheet()`: Tests the `createEventsFromSheet` function.

## Notes

* Make sure to set up the correct calendar ID and spreadsheet ID in the code.
* This program assumes that the sheet data is in the format of `Title`, `Start Date`, `End Date`, `Description`.
* You can customize the program to fit your specific needs.