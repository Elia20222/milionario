import { Component, Input } from '@angular/core';
import { Domanda } from '../interfaces/domanda';
import { Risposta } from '../interfaces/risposta';

@Component({
  selector: 'app-aiuto50e50',
  templateUrl: './aiuto50e50.component.html',
  styleUrls: ['./aiuto50e50.component.css']
})
export class Aiuto50e50Component {

  @Input()DOMANDE!:Domanda[]
  @Input()risposte!:Risposta
  @Input()domanda!:Domanda
  @Input()personacheAiutadaCasa= [] =[];
  @Input()data: any;
  
  constructor(){

  }
  aiuti50e50(){

  }
}
