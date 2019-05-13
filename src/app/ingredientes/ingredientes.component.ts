import { Component, OnInit } from '@angular/core';
import { IngredientesService } from './ingredientes.service';
import { IngredientesModel } from './ingredientes.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

  exibirPedidoFinalizado: boolean = false;
  listaIngredientes: IngredientesModel[];
  valorLanche: number = 0;
  idLanche: number;

  constructor(private service: IngredientesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.exibirPedidoFinalizado = false;

    this.route
      .queryParams
      .subscribe(params => {
        this.valorLanche = + params['valorLanche'] || 0;
        this.idLanche = + params['idLanche'];
      });

    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(res => {
      this.listaIngredientes = res;
    });
  }

  somaIngrediente(objeto, acao) {
    if (acao === 'Soma') {
      objeto.qtde = objeto.qtde + 1;
    } else {
      if (objeto.qtde <= 0) {
        return
      }
      objeto.qtde = objeto.qtde - 1;
    }

    let data = {
      idLanche:  this.idLanche,
      idIngrediente: objeto.id,
      qtdeIngrediente: objeto.qtde,
      valorAtualLanche: this.valorLanche,
      somaSubtrai: acao
    };

    this.service.somaIngrediente(data).subscribe(res => {
      this.valorLanche = res;
    });
  }

  finalizarPedido() {
    this.exibirPedidoFinalizado = true;
  }
}