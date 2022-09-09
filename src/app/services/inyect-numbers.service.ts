import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InyectNumbersService {

  public arrayNumeros: Number[] = [];

  constructor() {  }

  getArray(){

    var N = 100;
    for (var i = 1; i <= N; i++) {
      this.arrayNumeros.push(i);
    }

    return this.arrayNumeros;
  }
}
