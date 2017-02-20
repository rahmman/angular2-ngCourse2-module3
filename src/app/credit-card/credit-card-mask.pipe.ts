import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {

  transform(creditCard: string): string {
    let hideSection=creditCard.slice(0,-5);
    let visibleSection= creditCard.slice(-5)
    return hideSection.replace(/./g,'*').concat(visibleSection);
  }

}
