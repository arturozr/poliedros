import { pruebas } from './pruebas';

describe('pruebas', () => {
    let component: pruebas;

    beforeEach(() => {
        component = new pruebas();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('should retornar "Si es un poliedro" cuando los valores introducidos den como resultado 2', () => {
  expect(component.verificar(8,12,6)).toContain("Si es un poliedro");
  
});

it('should retornar "No es un poliedro" cuando los valores introducidos den como resultado un numero diferente de 2', () => {
  expect(component.verificar(8,12,4)).toContain("No es un poliedro");
  
});

});