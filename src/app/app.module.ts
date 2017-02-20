import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{CreditCardModule} from './credit-card/credit-card.module'
import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CreditCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
