import { Component, OnInit } from '@angular/core';
import { pruebas } from '../pruebas/pruebas';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  respuesta;
  valor1;
  valor2;
  valor3;

  constructor() {}

  ngOnInit(): void {}

  validar() {
    const $alerta = document.getElementById('alerta');

    let vrf = new pruebas(),
      color_alert = $alerta.classList[1].toString();

    switch (vrf.verificar(this.valor1, this.valor2, this.valor3).toString()) {
      case 'Si es un poliedro':
        $alerta.classList.replace(color_alert, 'alert-success');
        break;

      case 'No es un poliedro':
        $alerta.classList.replace(color_alert, 'alert-danger');
        break;

      default:
        $alerta.classList.replace(color_alert, 'alert-warning');
        break;
    }
    this.respuesta = vrf.verificar(this.valor1, this.valor2, this.valor3);
  }

  
}
