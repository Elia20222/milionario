import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Domanda } from '../interfaces/domanda';
import { Risposta } from '../interfaces/risposta';
import { FormArrayName, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-aiutidacasa',
  templateUrl: './aiutidacasa.component.html',
  styleUrls: ['./aiutidacasa.component.css']
})


export class AiutidacasaComponent implements OnInit, OnChanges {
  
  @Input()DOMANDE!:Domanda[]
  @Input()risposte!:Risposta
  @Input()domanda!:Domanda
  @Input()personacheAiutadaCasa = [] = [] ;
  //la variabile data ha il padre atinput, la variabile che ha come decoratore Input. il suo valore verrà legato all'esterno, ovvero in html.
  //@Input()data: any ;
  constructor(){

  }
  ngOnInit(): void {
    console.log('personecheAiutanodaCasa');
  }
;
  //implementa i cambiamenti del component di OnClick
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
    console.log(changes)
  }
;

  //ngOnInit: void(){

    //console.log(this.data)
  //};
  
  aiutiDaCasa(){
    
  }

  //const personacheAiutadaCasa = [
    //{
      //nome: "Angelo", cognome: "Bendotti", isOnline:true, color:"blue"
   // },
    //{
     // nome: "Alessandro", cognome: "Coppa",isOnline:true, color:"green"
    //},
    //{
      //nome: "Gabriele", cognome: "Radici",isOnline:true, color:"red"
    //},
    //{
     // nome: "Giacomo", cognome: "Bello",isOnline:true, color:"orange"
   // },
    //console.log("personacheAiutadaCasa")
  //]
  
}
