import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from './user-input/user-input.component';
import type { InvestmentInput } from './investment-input-model';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";  //type keyword in front of it to make it clear that this is just a type definition



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
//   // resultData? :{
//   //   year: number,
//   //   interest: number,
//   //   valueEndOfYear: number,
//   //   annualInvestment: number,
//   //   totalIntrest: number,
//   //   totalAmountInvested: number,
//   // }[];
//   //we use this thing with signal 

//   resultData = signal<{
//     year: number,
//     interest: number,
//     valueEndOfYear: number,
//     annualInvestment: number,
//     totalIntrest: number,
//     totalAmountInvested: number,
// }[] | undefined>(undefined)

//   onCalculateInvestmentResults(data:InvestmentInput) {                                //This section transfer to investment.service.ts  because we using a service for cross-component
//       const {initialInvestment,duration,expectedReturn,annualInvestment} = data;
//     const annualData = [];
//     let investmentValue = initialInvestment;

//     for (let i = 0; i < duration; i++){
//       const year = i + 1;
//     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//     investmentValue += interestEarnedInYear + annualInvestment;
//     const totalIntrest = investmentValue - annualInvestment * year - initialInvestment;
//     annualData.push({
//       year: year,
//       interest: interestEarnedInYear,
//       valueEndOfYear: investmentValue,
//       annualInvestment: annualInvestment,
//       totalIntrest: totalIntrest,
//       totalAmountInvested: initialInvestment + annualInvestment * year,
//     });
//   }
//    //this.resultData = annualData;
//    this.resultData.set(annualData);  //if we use signal 
// }
}
