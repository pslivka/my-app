import React from 'react';
import './App.css';
import { FaTwitter } from "react-icons/fa";

const quotes = [
  [`"Buy rising stocks and sell falling stocks."`, "Jesse Livermore"],
  [`"Of course, hope is not a strategy for the stock market."`, "Jesse Livermore"],
  [`"Don't be tempted to turn a trade into an investment by holding onto stocks. If you're looking for investments, you should have started with a different criteria. "`, "Jesse Livermore"],
  [`"Markets are never wrong. Opinions often are."`, "Jesse Livermore"],
  [`"The human side of every person is the greatest enemy of the average investor or speculator."`, "Jesse Livermore"],
  [`"Know what you own, and know why you own it."`, "Peter Lynch"],
  [`"If you've spent 14 minutes a year on economics, you've wasted 12 minutes."`, "Peter Lynch"],
  [`"It's very hard to go bankrupt if you don't have any debt."`, "Peter Lynch"],
  [`"A stock does not know if you own it."`, "Peter Lynch"],
  [`"The key organ in your body in the stock market is your stomach. It's not the brain."`, "Peter Lynch"],
  [`"It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price."`, "Warren Buffett"],
  [`"The intelligent investor is a realist who sells to optimists and buys from pessimists."`, "Benjamin Graham"],
  [`"Successful investing is about managing risk, not avoiding it."`, "Benjamin Graham"],
  [`"When you really believe that trading is simply a probability game, concepts like right or wrong or win or lose no longer have the same significance"`, "Mark Douglas"],
  [`"Understanding both the power of compound interest and the difficulty of getting it is the heart and soul of understanding a lot of things."`, "Charlie Munger"],
  [`"Amateurs think about how much money they can make. Professionals think about how much money they could lose."`, "Jack Schwager"],
  [`"Compound interest is the eighth wonder of the world. He who understands it earns it. He who doesn't pays it"`, "Albert Einstein"],
  [`"The market can stay irrational longer than you can stay solvent."`, "John Maynard Keynes"],
  [`"We are in the business of making mistakes. Winners make small mistakes, losers make big mistakes."`, "Ned Davis"],
  [`"In many ways, the stock market is like the weather in that if you don't like the current conditions, all you have to do is wait a while."`, "Low Simpson"]
];

const colors = [['rgb(23, 112, 23)', 'azure'], ['rgb(248, 4, 4)', 'rgb(43, 36, 36)']];

var quoteNum = Math.floor(20*Math.random());
var colorNum = Math.floor(2*Math.random());


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      quote: quotes[quoteNum][0],
      author: quotes[quoteNum][1],
      txtColor: colors[colorNum][0],
      bkgColor: colors[colorNum][1],
    };
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick() {
    let quoteNum = Math.floor(20*Math.random());
    let colorNum = Math.floor(2*Math.random());

    this.setState({quote: quotes[quoteNum][0],
                    author: quotes[quoteNum][1],
                    txtColor: colors[colorNum][0],
                    bkgColor: colors[colorNum][1],

    })
  }
  render() {
    const colorStyle = {
      color: this.state.txtColor,
      backgroundColor: this.state.bkgColor,
    };
    const bttnStyle = {
      color: this.state.bkgColor,
      backgroundColor: this.state.txtColor,
    }

    return (
      <div className='myContainer'>
        <div className='innerContainer' id='quote-box' style={colorStyle}>
          <p className='quoteText' id='text'>{this.state.quote}</p>
          <p className='authorText' id='author'> - {this.state.author}</p>
          <div className='rowStyle'>
            <button className='bttnStyle' id='new-quote' style={bttnStyle} onClick={this.handleClick}>Click for new quote</button>
            <a className='twitStyle' id='tweet-quote' href="twitter.com/intent/tweet" target='_blank' style={{backgroundColor: '#61BFE8'}}><FaTwitter /></a>
          </div>
        </div>
      </div>
    )};

  

  
};

export default App;
