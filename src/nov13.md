# Notes

## React and UI frameworks/libraries

### Why?

- react is hugely in demand in the industry
- Component based architecture is easier to test and reuse
- dynamic ui updates based on application state without requiring a page reload
- dev advantages
  - reusable parts
  - separation of concerns: html/css/js

### What?

- React (angular and vue) are component based libraries that allow us to build applications using this technique
- Bind state/data to the DOM: Document Object Model, they update the dom for us!!
  - react rerenders content when state changes by using a Virtual DOM
- We treat components like they are html elements `<Header />`
- Modularity: organized by modular building blocks called **components**
  - each component is it's own module, or block of code, that we can make available in another component
  - export the component from it's file, and import it where you want to use it
    - you can also import css and other files to a component module

### How

- WRRC
  - a request is made in the address bar for our website resource and the files are served
  - who is the client, who is the server?
- Use `npx create-react-app <application_name>` to start your project
- refer to the reactRemove.md if you want to clean up the file structure before you start
- react uses mark-up called **jsx** that is converted to javascript which writes to the dom.

### curly braces in jsx

- a statement to be evaluated
- attributes!
