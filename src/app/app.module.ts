import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RispostaComponent } from './components/risposta/risposta.component';
import { DomandaComponent } from './components/domanda/domanda.component';
import { PunteggioComponent } from './component/punteggio/punteggio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AiutidacasaComponent } from './aiutidacasa/aiutidacasa.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupsconfittoComponent } from './popupsconfitto/popupsconfitto.component';
import { AiutidalpubblicoComponent } from './aiutidalpubblico/aiutidalpubblico.component';
import { Aiuto50e50Component } from './aiuto50e50/aiuto50e50.component'

@NgModule({
  declarations: [
    AppComponent,
    RispostaComponent,
    DomandaComponent,
    PunteggioComponent,
    AiutidacasaComponent,
    PopupsconfittoComponent,
    AiutidalpubblicoComponent,
    Aiuto50e50Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
