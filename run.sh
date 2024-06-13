#!/bin/bash

# Install dependencies
npm install --save @google/clasp

# Run the code
clasp login
clasp create --type standalone
clasp push
clasp run createEventsFromSheet
