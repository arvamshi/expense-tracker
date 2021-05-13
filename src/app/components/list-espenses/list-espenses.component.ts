import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-espenses',
  templateUrl: './list-espenses.component.html',
  styleUrls: ['./list-espenses.component.css']
})
export class ListEspensesComponent implements OnInit {

  expenses: Expense[]=[];

  listExpenses(){
    this._expenseService.getExpenses().subscribe(
      data => this.expenses=data
    )
  }
  
  constructor(private _expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.listExpenses();
  }
  
  deleteExpense(id: number){
    this._expenseService.deleteExpense(id).subscribe(
      data=>{
        console.log('deleted response : ',data);
        this.listExpenses();
      }
    )
  }

}
