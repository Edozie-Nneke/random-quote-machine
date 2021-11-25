# random-quote-machine
A simple react app that fetches from an array of quotes and renders random quotes on first load and subsequently from a button click.
# App Component
Returns two child components <Quote/> and <ChangeQuote/>.
# Quote Component
This component is a functional component that receives props from <App/> in form of an array with a single object and maps over it to return "quote" and "author".
# ChangeQuote Component
Returns a button which when clicked, dispatches an action that fires off getNewQuote() and changes the quote sent to <Quote/>.
