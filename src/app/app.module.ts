import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanchesComponent } from './lanches/lanches.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { FormsModule } from '@angular/forms';
import { IngredientesService } from './ingredientes/ingredientes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LanchesService } from './lanches/lanches.service';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

@NgModule({
  declarations: [
    AppComponent,
    LanchesComponent,
    HomeComponent,
    HeaderComponent,
    IngredientesComponent,
    FooterComponent,
    ContatoComponent,
    BoasVindasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    LanchesService,
    IngredientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
