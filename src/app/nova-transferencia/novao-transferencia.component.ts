import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../services/models/transferencia.model';
import { TransferenciasService } from '../services/transferencias.service';

@Component({
  selector: 'app-nova-tansferencia',
  templateUrl: './nova-transferencia.compnent.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: string;


  constructor(private service: TransferenciasService, private router: Router) {
  }

  transferir() {
    console.log('tramsferido', this.valor, this.destino);
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}
    this.service.adicionar(valorEmitir).subscribe(res => {
      console.log(res);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },

    (error) => {
      console.error(error);
    });

  }

  limparCampos(){
    this.valor = 0;
    this.destino = '';
  }
}
