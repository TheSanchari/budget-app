import { Component, OnInit } from '@angular/core';
import { BudgetItems } from 'src/shared/models/budget-items.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems:BudgetItems[] = new Array<BudgetItems>();

  constructor() { }

  ngOnInit() {
  }
  addItem(item:BudgetItems){
    this.budgetItems.push(item)
  }


}
