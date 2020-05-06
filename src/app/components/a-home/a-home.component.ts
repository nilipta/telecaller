import { Component, OnInit } from '@angular/core';

import { OperatorsService } from '../../services/operators.service';

@Component({
  selector: 'app-a-home',
  templateUrl: './a-home.component.html',
  styleUrls: ['./a-home.component.scss']
})
export class AHomeComponent implements OnInit {
  allOperators = [];

  constructor( private operatorsService: OperatorsService) { }

  ngOnInit(): void {
    this.allOperators = this.operatorsService.getAll();
  }

}
