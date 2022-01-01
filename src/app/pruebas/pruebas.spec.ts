import { pruebas } from './pruebas';

describe('pruebas', () => {
    let component: pruebas;

    beforeEach(() => {
        component = new pruebas();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('Deberia retornar "Si es un poliedro" cuando los valores introducidos den como resultado 2', () => {
  expect(component.verificar(8,12,6)).toContain("Si es un poliedro");
  
});

it('Deberia retornar "No es un poliedro" cuando los valores introducidos den como resultado un numero diferente de 2', () => {
  expect(component.verificar(8,12,4)).toContain("No es un poliedro");
  
});


it('Deberia retornar "Debe introducir solo numeros" cuando los valores introducidos no sean de tipo number', () => {
  expect(component.verificar("V","E","F")).toContain("Debe introducir solo numeros");
});

it('Deberia retornar "Debe introducir solo numeros" cuando los valores introducidos no sean de tipo number', () => {
  expect(component.verificar(8,"E","F")).toContain("Debe introducir solo numeros");
});

it('Deberia retornar "Debe introducir solo numeros" cuando los valores introducidos no sean de tipo number', () => {
  expect(component.verificar(8,12,"F")).toContain("Debe introducir solo numeros");
});

it('Deberia retornar "Debe introducir solo numeros" cuando los valores introducidos no sean de tipo number', () => {
  expect(component.verificar("V",12,6)).toContain("Debe introducir solo numeros");
});

it('Deberia retornar "Debe introducir solo numeros" cuando los valores introducidos no sean de tipo number', () => {
  expect(component.verificar(8,"E",6)).toContain("Debe introducir solo numeros");
});


});