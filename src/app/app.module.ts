import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InyectarNumerosComponent } from './components/inyectar-numeros/inyectar-numeros.component';
import { InyectNumbersService } from './services/inyect-numbers.service';

@NgModule({
  declarations: [
    AppComponent,
    InyectarNumerosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InyectNumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
