import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  public employees: Array<any> = 
  [
    {name: "Vijay", load: 10},
    {name: "Akash", load: 15},
    {name: "valmiki", load: 13},
    {name: "pinku", load: 14},
    {name: "vinayak", load: 12},
    {name: "gana", load: 15},
  ];

  constructor() { }

  getAll () {
    return this.employees;
  }

  getOne (id: string) {
      console.log("id  = ", id);
      return this.employees[id];
  }

}


export interface PersonApi {
  name: string;
  load: number;
}