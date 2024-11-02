# Cali.co - a Calculator App

Cali.co is a Calculator & Stopwatch app complete with user login and validation functionality.  

## Project Features:

### Page 1: Login
- Contains 4 fields: email, username, password and confirm password
- Email field only accepts @northeastern.edu email IDs
- Username fields can contain alphanumeric characters and underscore
- Password requires at least 8 characters including one of each: uppercase letter, lowercase letter, number and special character
- Confirm password requires an exact match of password field input
- All fields have null check (required), min-length and max-length attributes
- All validations are performed using regex and jQuery
- In case of invalid input, custom error messages highlighted in red color are shown below each field
- Login button is enabled once all validations are satisfied
- Login button redirects to calculator page

### Page 2: Calculator
- Displays the logged-in username in the header
- Contains 2 input fields that only accept numbers
- Contains 4 buttons for operations: add, subtract, multiply and divide
- Operations are performed through a single arrow function and switch case
- Once numbers are entered into input fields and an operation is clicked, the result shows up in an uneditable input field
- The operation being performed is shown in the area between the number inputs
- Input fields only allow numbers and cannot be null
- If an input field(s) is empty when an operation is selected, error messages are shown under the respective input field(s)
- Validations are performed with jQuery
- Dividing a number by 0 displays an error message in the result
- Reset button clears the text boxes and current operation
- Logout button takes the user back to the login page
- The page contains link to the Stopwatch page at the bottom

#### Page 3: Stopwatch
- Displays the logged-in username in the header
- Uses async, await, promises, setInterval and clearInterval to display a working stopwatch
- Contains an uneditable date field that displays the current date by default
- Date field has the ability to select past and future dates through the calendar icon
- Contains 1 label containing the stopwatch timer, initially set at 00 : 00 : 00
- Contains 3 buttons: start, stop and reset
- Start button:
  - Start button checks if an interval is already in progress. If yes, it does nothing
  - If no intervals are in progress, the start button uses async-await-promise-setInterval to start a repeating interval of 1000 miliseconds (= 1 second)
  - The elapsed time is formatted into HH:MM:SS format and displayed in the stopwatch label
- Stop (or Pause) button:
  - Uses async-await-promise-clearInterval to pause the ongoing interval
- Reset button:
  - clears the current interval
  - resets elapsed time to 0 and the stopwatch label text to 00:00:00
- Logout button takes the user back to the login page
- The page contains link to the Calculator page at the bottom

## Additional Features:

- Website is responsive for different views
- The website uses SASS for styling
- Calculator operations use icons instead of plain text
- Instead of created 2 separate apps for (login + calculator) and (stopwatch), the functionality has been wrapped into one website with 3 pages.
