import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';
import { CreditCardMaskPipe } from './credit-card-mask.pipe';
import{CreditCardService} from'./credit-card.service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreditCardComponent, CreditCardMaskPipe],
  exports:[CreditCardComponent],
  providers: [CreditCardService]
})
export class CreditCardModule { }
