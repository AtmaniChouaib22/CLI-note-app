# CLI Note App

A simple CLI-based note-taking application that allows you to manage notes and view them in a web browser.

## Features

- Add, remove, and list notes via CLI commands.
- View notes in a web browser.
- Simple HTML templating for displaying notes.

## Installation

1. Clone the repository:
   git clone https://github.com/AtmaniChouaib22/cli-note-app.git
   cd cli-note-app
2. Install dependencies:
   npm install
   
index.js new <content>  create a new note
  index.js all            get all notes
  index.js find <filter>  get matching notes
  index.js remove <id>    remove a note by id
  index.js web [port]     launch website to see notes
  index.js clean          remove all notes

# Usage
CLI Commands

## Add a Note:
note new "your note" --tags "tag1, tag2"

## get matching notes
note find <filter>

## get help 
note --help 

## Remove a Note:
note remove <id>

## List All Notes:
note all

## Remove All Notes:
note clean

## Launch Web Interface:
note web [port]

Default port is 5000. You can specify a different port if needed.
### Example
To add a note:
note add --title="Shopping List" --body="Milk, Bread, Eggs"

To view notes in a web browser on port 4000:
note web 4000

## Project Structure
index.js: Entry point for the CLI commands.
notes.js: Contains functions for managing notes.
server.js: Contains functions for starting the web server.
template.html: HTML template for displaying notes.

## Development
Running the Server
To manually start the server, you can use the following command:
node src/server.js

## Testing
To run tests, use the following command:
npm test

## Dependencies
yargs: For parsing CLI commands.
open: For opening the web browser.
http: For creating the web server.
fs/promises: For file system operations.


