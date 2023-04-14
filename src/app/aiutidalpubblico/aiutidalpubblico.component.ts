import { Component, Input } from '@angular/core';
import { Domanda } from '../interfaces/domanda';
import { Risposta } from '../interfaces/risposta';

@Component({
  selector: 'app-aiutidalpubblico',
  templateUrl: './aiutidalpubblico.component.html',
  styleUrls: ['./aiutidalpubblico.component.css']
})
export class AiutidalpubblicoComponent {

  @Input()DOMANDE!:Domanda[]
  @Input()risposte!:Risposta
  @Input()domanda!:Domanda
  @Input()personacheAiutadaCasa= [] =[];
  aiutiDalPubblico(){

  }
}
