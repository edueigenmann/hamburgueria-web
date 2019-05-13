import { Component, OnInit } from '@angular/core';
import { LanchesService } from './lanches.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.component.html'
})
export class LanchesComponent implements OnInit {

  listaLanches: any[];
  ingredientes: any[];
  precoLanche: number;

  constructor(private service: LanchesService, private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(res => {
      this.listaLanches = res;
    })
  }

  goToPage(object) {
    this.router.navigate(['/ingredientes'], { queryParams: { valorLanche: object.preco, idLanche: object.id } });
  }

}
