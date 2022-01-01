import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export class pruebas {

  espoliedro=undefined;
  v=undefined;
  e=undefined;
  f=undefined;
  
  verificar(v,e,f){  
 
    if(typeof(v) !== "number" || typeof(e) !== "number" || typeof(f) !== "number") return this.espoliedro = "Debe introducir solo numeros";    
    if(Math.sign(v) === -1 || Math.sign(e) === -1 || Math.sign(f) === -1) return this.espoliedro = "Debe ingresar solo números positivos";
    
    let resultado = v - e + f;
    if(resultado === 2 ){
      return this.espoliedro="Si es un poliedro";
    }else{
      return this.espoliedro="No es un poliedro";
    }
    
  
  }
}
