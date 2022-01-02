import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia llamar al metodo validar', () => {
 
    let respuesta;
    component.valor1 = 8;
    component.valor2 = 12;
    component.valor3 = 6;

    component.validar();
    respuesta = component.respuesta;

    expect(respuesta).toBe("Si es un poliedro");
 }); 
 
 it('Deberia cambiar el color de la respuesta a verde si es un poliedro', () => {
 
  let respuesta;
  component.valor1 = 8;
  component.valor2 = 12;
  component.valor3 = 6;
  component.validar();
  respuesta = component.respuesta;
  const $alerta = document.getElementById('alerta');
  expect($alerta.classList[1].toString()).toBe("alert-success");
});

it('Deberia cambiar el color de la respuesta a rojo si no es un poliedro', () => {
 
  let respuesta;
  component.valor1 = 0;
  component.valor2 = 0;
  component.valor3 = 0;
  component.validar();
  respuesta = component.respuesta;
  const $alerta = document.getElementById('alerta');
  expect($alerta.classList[1].toString()).toBe("alert-danger");
});

it('Deberia cambiar el color de la respuesta a naranja si el mensaje es un warning', () => {
 
  let respuesta;
  component.valor1 = 0;
  component.valor2 = "a";
  component.valor3 = 0;
  component.validar();
  respuesta = component.respuesta;
  const $alerta = document.getElementById('alerta');
  expect($alerta.classList[1].toString()).toBe("alert-warning");
});


});
