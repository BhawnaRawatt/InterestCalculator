import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input-model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
//  // @Output() calculator = new EventEmitter<InvestmentInput>();
//   // enteredInitialInvestment = '0';
//   // enteredAnnualInvestment = '0';
//   // enteredExpectedReturned = '5';
//   // enteredDuration = '10';

//   calculator = output<InvestmentInput>();
//   enteredInitialInvestment = signal('0');    //if we use signal
//   enteredAnnualInvestment = signal('0');
//   enteredExpectedReturned = signal('5');
//   enteredDuration = signal('10');

  enteredInitialInvestment = signal('0');    
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturned = signal('5');
  enteredDuration = signal('10');

  constructor( private investmentService : InvestmentService){}


  onSubmit(){
    // console.log("Submitted!");
    // console.log(this.enteredInitialInvestment);

    this.investmentService.calculateInvestmentResults({
    initialInvestment: +this.enteredInitialInvestment(), 
    duration: +this.enteredDuration(),
    expectedReturn: +this.enteredExpectedReturned(),
    annualInvestment: +this.enteredAnnualInvestment() 
    });

    // this.calculator.emit({
    // //  initialInvestment: +this.enteredInitialInvestment,   //easily transfrom string value to number  in angular by + sign 
    // //  duration: +this.enteredDuration,
    // //  expectedReturn: +this.enteredExpectedReturned,
    // //  annualInvestment: +this.enteredAnnualInvestment     

    // initialInvestment: +this.enteredInitialInvestment(), //I actually wanna emit the data stored in the Signal,not the Signal itself.So we should read all these signals here by adding parentheses when that on submit method is triggered.
    // duration: +this.enteredDuration(),
    // expectedReturn: +this.enteredExpectedReturned(),
    // annualInvestment: +this.enteredAnnualInvestment() 
    // });
    this.enteredInitialInvestment.set('0'),
    this.enteredAnnualInvestment.set('0'),
    this.enteredExpectedReturned.set('5'),
    this.enteredDuration.set('10')

  }
}
