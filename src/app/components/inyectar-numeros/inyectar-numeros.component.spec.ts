import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyectarNumerosComponent } from './inyectar-numeros.component';

describe('InyectarNumerosComponent', () => {
  let component: InyectarNumerosComponent;
  let fixture: ComponentFixture<InyectarNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InyectarNumerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InyectarNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
