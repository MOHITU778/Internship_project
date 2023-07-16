import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  selected1 = 'option1';
  selected2 = "option1";
  selected3 = "option1";
  selected4 = "option1";

  constructor() { }

  ngOnInit(): void {
  }

}
