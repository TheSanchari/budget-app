import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItems } from 'src/shared/models/budget-items.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Input() item:BudgetItems = new BudgetItems('',null);
  @Output() formSubmit:EventEmitter<BudgetItems> = new EventEmitter<BudgetItems>();

  constructor() { }
 
  ngOnInit() {
  }
  onSubmit(form:NgForm) {
      this.formSubmit.emit(form.value)
  }

}
