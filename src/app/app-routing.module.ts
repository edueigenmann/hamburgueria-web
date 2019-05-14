import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LanchesComponent } from './lanches/lanches.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { ContatoComponent } from './contato/contato.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

const routes: Routes = [
  { path: '', component: BoasVindasComponent },
  { path: 'lanches', component: LanchesComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'boas-vindas', component: BoasVindasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
