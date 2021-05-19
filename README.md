# Autocomplete Component in React

Build a sample react autocomplete component.

This is an exercise where I followed the tutorial from freecodecamp
[React Beginners Tutorial - Build an Autocomplete Text Box](https://www.youtube.com/watch?v=NnpISZANByg)

Check the demo hosted on Netlify Check the demo hosted on Netlify [Autocomplete Component React](https://zealous-kalam-6c0e9c.netlify.app/).

Instructions
First clone this repository.

`$ git clone git@github.com:JenniferWjertzoch/autocomplete-component-react.git`

Install dependencies. Make sure you already have nodejs & npm installed in your system.

`$ npm install`

Run it

`$ npm run start`

## The User Story

I created a normal text input enhanced by a panel of suggested options.

The user can:

1. can enter search terms
2. suggestions will be displayed
3. can select a term from the list

---
## The Approach
### Search and Filter Suggestions
The suggestions need to be updated in the state as the user types in the input field.
Each time they get updated, the component render()-function gets called again and it only returns a list with a matching items as this is what's in the state at the time the function gets called.

I created a separate autocomplete component, that is imported to App.js and added as a simple HTML-Tag.

The Autocomplete.js consists of:

### *1. The Constructor*

The React Component Constructor must take an argument called props and call the superclass constructor passing the props argument to it.

In there we have a list with suggestions. The suggestion object should be empty when we call the component for the first time. 

### *2. render()-Function*

From this we must return the react elements we want to represent our components.
Thanks to JSX we can write them in Javascript as HTML.

First task was to find out when the user writes to the text box to filter the item list and output the matching items.
For this I used an onChange-event which triggers the onTextChange-Function when a user adds text to the input field. Then another function renderSuggestions() is executed.

### *3. onTextChange()-Function*

This function takes care of typing into the input field. The Event.target throws out what the user writes into the input field.
With the RegExp object we can look for matching text with a pattern.
Then we filter our items and with the help of the regex.test() method executes a search for a match between a regular expression and a specified string. It returns true or false.
The state will be updated and setState() tells the component that the state has changed and triggers a rerender and display the new version ofthe component means with the updated suggestions of the list.

### *4. renderSuggestions()-Function*

First suggestions need to be destructured from the state.
If the list is empty, then return null and anything null will not be shown by the browser.
Otherwise map over the suggestions and output a li-element and render the suggestions in the render function.

---
### Select Suggestion from Suggestion-List
When the user clicks a suggestion in the list, it poulates the textbox with the suggestion in it.

To controle the text-value in the input field, we need to add a value prop first.

To fill the value with text, we need to give the state in the constructor a text-property with an empty string.

In the render()-function extract the text-values from the state.

In the onTextChange-function() we set that value in the state as text, when the textbox value changes.

### *5. SuggestionSelected()-Function*

This function says, when we have selected a suggestion.
It takes the selected item of the suggestion list as an argument and we update the state, so the value the textbox uses is the selected suggestion.
suggestions list is deleted, by setting it an empty array.

---
## Styled-Components and CSS-in-JS
For the styling of the component I used the CSS-in-JS approach. This makes the component completely self-sufficient and it is possible to reuse them in any page. 