import { Component, Inject, inject, OnInit } from '@angular/core';
import { InyectNumbersService } from 'src/app/services/inyect-numbers.service';

@Component({
  selector: 'app-inyectar-numeros',
  providers: [InyectNumbersService],
  templateUrl: './inyectar-numeros.component.html',
  styleUrls: ['./inyectar-numeros.component.css']
})

export class InyectarNumerosComponent implements OnInit {

  title = 'Numeros';
  arrayNumeros: Number[] | undefined;

  constructor (private miServicio: InyectNumbersService){}

  ngOnInit() :void {

    this.arrayNumeros = this.miServicio.getArray();

  }
}
