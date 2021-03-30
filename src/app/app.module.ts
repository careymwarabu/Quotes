import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFooterComponent } from './quote-footer/quote-footer.component';
import { QuoteHeaderComponent } from './quote-header/quote-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AppQuote} from '../app';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    DateCountPipe,
    QuoteFooterComponent,
    QuoteHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

