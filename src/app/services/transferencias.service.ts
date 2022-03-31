import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from './models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  private listaDeTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClint: HttpClient) {
    this.listaDeTransferencia = [];
  }

  get transferencia() {
    return this.listaDeTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClint.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia)
    // const transferencia = {...$event, data: new Date()}
    // this.listaDeTransferencia.push(transferencia);
    return this.httpClint.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
