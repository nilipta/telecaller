import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { OperatorsService } from './../../services/operators.service';

@Component({
  selector: 'app-b-operator',
  templateUrl: './b-operator.component.html',
  styleUrls: ['./b-operator.component.scss']
})
export class BOperatorComponent implements OnInit {
  public operator = {
      name: '',
      email: '',
      address: '',
      load: ''
  };

  constructor(
    private route: ActivatedRoute,
    private operatorsService : OperatorsService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.prepareOperatorData(this.operatorsService.getOne(id))
  }

  private prepareOperatorData(operatorObj)
  {
    this.operator = 
    {
      name: operatorObj.name,
      email: operatorObj.name + '@gmail.com',
      address: operatorObj.name + "'s Home",
      load: operatorObj.load

    }
  }

}
