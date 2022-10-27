import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public inputValue: string = '';
  public outputValue: number = 0;
  public firstNumber: string = '';
  public secondNumber: string = '';
  public nextNumber: string = '';
  public operation!: any;
  public flagOperations: boolean = false;
  public digit: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '00'];
  public action: string[] = ['-', '+', '/', '×', '√', '%'];

  constructor() {
  }

  ngOnInit(): void {
  }

  clear() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.operation = undefined;
    this.inputValue = '';
    this.outputValue = 0;
  }


  getOperations(num: string) {
    this.inputValue += num;
    if (this.action.includes(num)) {
      this.operation = num;
    }
    if (this.digit.includes(num)) {
      if (this.firstNumber == '' && this.secondNumber == '' && this.operation == undefined) {
        this.firstNumber = num;
      } else if (this.firstNumber != '' && this.operation == undefined) {
        this.firstNumber += num;
      } else if (this.firstNumber != '' && this.operation != undefined) {
        this.secondNumber += num;
      }
      console.log(this.firstNumber, this.secondNumber, this.operation);
    }

    if (num == '=') {
      switch (this.operation) {
        case '+' :
          this.outputValue = +this.firstNumber + +this.secondNumber;
          console.log(this.firstNumber, +this.secondNumber)
          break;
        case '-' :
          this.outputValue = +(+this.firstNumber - +this.secondNumber).toFixed(9);
          break;
        case '×' :
          this.outputValue = +(+this.firstNumber * +this.secondNumber).toFixed(9);
          break;
        case '/' :
          this.outputValue = +(+this.firstNumber / +this.secondNumber).toFixed(9);
          break;
        case '%' :
          this.outputValue = +((+this.firstNumber / 100) * +this.secondNumber).toFixed(9);
          break;
      }
      this.secondNumber = '';
      this.operation = undefined;
      this.inputValue = this.firstNumber =  String(this.outputValue);
    }

    if (num == '√') {
      this.outputValue = +(Math.sqrt(+this.firstNumber)).toFixed(9);
      this.firstNumber = '';
      this.operation = undefined;
      this.inputValue = this.firstNumber =  String(this.outputValue);
    }
  }
}
