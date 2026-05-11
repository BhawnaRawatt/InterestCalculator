import { Injectable, signal } from "@angular/core";
import type { InvestmentInput } from "./investment-input-model";

@Injectable({providedIn : 'root'})
export class InvestmentService {

    // resultData? :{                                  //use in services 
    //     year: number,
    //     interest: number,
    //     valueEndOfYear: number,
    //     annualInvestment: number,
    //     totalIntrest: number,
    //     totalAmountInvested: number,
    // }[];

    resultData = signal<{                                  //If we use signals in services 
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalIntrest: number,
        totalAmountInvested: number,
    }[] | undefined>(undefined)



    calculateInvestmentResults(data:InvestmentInput) {                                //This section transfer to investment.service.ts  because we using a service for cross-component
        const {initialInvestment,duration,expectedReturn,annualInvestment} = data;
      const annualData = [];
      let investmentValue = initialInvestment;
  
      for (let i = 0; i < duration; i++){
        const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalIntrest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalIntrest: totalIntrest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
      //this.resultData = annualData;   //use in services 
      this.resultData.set(annualData);  // use signals in services
    }
    
}
}