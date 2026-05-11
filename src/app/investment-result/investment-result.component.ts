import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.scss'
})
export class InvestmentResultComponent {
  // results = input<{     //if we use signal with output
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalIntrest: number,
  //   totalAmountInvested: number,
  // }[]>();

  // // @Input() results?: {
  // //     year: number,
  // //     interest: number,
  // //     valueEndOfYear: number,
  // //     annualInvestment: number,
  // //     totalIntrest: number,
  // //     totalAmountInvested: number,

  // // }[];

  private investmentService = inject(InvestmentService);

  // get results(){                                   //use in services 
  //   return this.investmentService.resultData;
  // }


  results = computed(()=> this.investmentService.resultData());  
  //results = this.investmentService.resultData.asReadonly();

}
