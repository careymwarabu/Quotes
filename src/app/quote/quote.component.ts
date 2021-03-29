import { Component, OnInit } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  faQuoteRight = faQuoteRight;
  faQuoteLeft = faQuoteLeft;
  quotes: Quote[] = [
    new Quote(
      1,
      'Oliver Johnson',
      'Covering everything from host success tips to travel inspiration and company news.',
      'Carey Mwarabu',
      new Date(2019, 4, 8)
    ),
    new Quote(
      2,
      'Lenny Smith',
      'The Airbnb is a great resource for beginner and experienced hosts alike.',
      'Michael Schorfield',
      new Date(2020, 5, 26)
    ),
    new Quote(
      3,
      'Joe Jonas',
      'Expert hosting duo Jim Breese and Symon He are the brains behind this Airbnb blog. As well as informative posts on just about everything Airbnb-related (insurance, safety, cleaning – you name it',
      'Steve Furtick',
      new Date(2020, 5, 25)
    ),
  ];
  upvoteQuote(index: number) {
    this.quotes[index].upVotes += 1;
  }
  downvoteQuote(index: number) {
    this.quotes[index].downVotes += 1;
  }
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }
  checkHighestUpvote(): Quote[] {
    return this.quotes.sort((a: Quote, b: Quote) => b.upVotes - a.upVotes);
  }
  setHighest() {
    let highQuote = { ...this.checkHighestUpvote() };
    return highQuote[0];
  }
  deleteQuote(toDelete: boolean, index: number) {
    console.log('Clicked');

    this.quotes.splice(index, 1);
  }
  constructor() {}

  ngOnInit(): void {}
}