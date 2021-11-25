import React from 'react';
import './style.css';

const Quote = props => {
  let selectedQuote = props.selectedQuoteArray.map((quote, index) => {
    return (
      <div key={index}>
        <h2 id='text'>
          <i className='bx bxs-quote-alt-left'></i>
          {quote.text}
        </h2>
        <h4 id='author'>- {quote.author ? quote.author : 'Anonymous'}</h4>
      </div>
    );
  });
  return <>{selectedQuote}</>;
};

const ChangeQuote = props => {
  return (
    <div className='wrapper'>
      <a href='twitter.com/intent/tweet' id='tweet-quote'>
        <i className='bx bxl-twitter'></i>
      </a>
      <button id='new-quote' onClick={props.getNewQuote}>
        New quote
      </button>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      selectedQuoteArray: [],
    };

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    let lengthOfState = this.state.quotes.length;
    let randomIndex = Math.floor(Math.random() * lengthOfState);

    this.setState({
      ...this.state.quotes,
      selectedQuoteArray: this.state.quotes.slice(randomIndex, randomIndex + 1),
    });
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => this.setState({ quotes: data }))
      .then(() => {
        let lengthOfState = this.state.quotes.length;
        let randomIndex = Math.floor(Math.random() * lengthOfState);
        this.setState({
          ...this.state.quotes,
          selectedQuoteArray: this.state.quotes.slice(randomIndex, randomIndex + 1),
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    let lengthOfState = this.state.quotes.length;
    let randomIndex = Math.floor(Math.random() * lengthOfState);
    const selectedQuoteArray = this.state.quotes.slice(randomIndex, randomIndex + 1);

    return (
      <div id='quote-box'>
        <Quote selectedQuoteArray={selectedQuoteArray} />
        <ChangeQuote getNewQuote={this.getNewQuote} />
      </div>
    );
  }
}

export default App;
