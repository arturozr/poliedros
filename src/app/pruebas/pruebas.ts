import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export class pruebas {

  espoliedro=undefined;
  v=undefined;
  e=undefined;
  f=undefined;
  
  verificar(v,e,f){  
 
    if( v.toString().trim().length == 0 || e.toString().trim().length === 0 || f.toString().trim().length === 0 ) return this.espoliedro = "Debe llenar todos los campos";
    
    if(typeof(v) !== "number" || typeof(e) !== "number" || typeof(f) !== "number") return this.espoliedro = "Debe introducir solo numeros";    
    if(Math.sign(v) === -1 || Math.sign(e) === -1 || Math.sign(f) === -1) return this.espoliedro = "Debe ingresar solo números positivos";
    if(Number.isInteger(v) === false || Number.isInteger(e) === false || Number.isInteger(f) === false ) return this.espoliedro = "Solo se permiten números enteros";
    
    let resultado = v - e + f;
    if(resultado === 2 ){
      return this.espoliedro="Si es un poliedro";
    }else{
      return this.espoliedro="No es un poliedro";
    }
    
  
  }
}
