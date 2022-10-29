# food-memories

A CRUD application that serves to document my culinary experiences

## Project Overview

The app consists of an aesthetically-designed front-end constructed from React and Material UI and a Next.js back-end that saves entries within a PostgreSQL database. The web directory will initially consist of a landing page that renders a table of entries with appropriate pagination. Clicking on an entry directs the user to a unique page that lists details related to the entry, including but not limited to name, date(s) experienced, location, and pictures.

## Adding/Editing Entries

Users can add and edit entries by signing in through email authentication. The email generates a One-Time Password that authorizes the user with modification privileges. This is handled through the NextAuth library.
