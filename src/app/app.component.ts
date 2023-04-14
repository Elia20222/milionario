import { Component, OnInit } from '@angular/core';
import { DOMANDE } from './domande';
import { Domanda } from './interfaces/domanda';
import { MatDialog } from '@angular/material/dialog';
import { PopupsconfittoComponent } from './popupsconfitto/popupsconfitto.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'milionario';
  livello:number = 0 //il livello della domanda corrente
  domanda!:Domanda // domanda che mostro al momento
  
  //domande:Domanda[]= DOMANDE
  
  constructor(private dialog: MatDialog){

  }

  rispostaAccesa(corretta:boolean){
    if(!corretta){
      console.log('hai perso!')
      this.dialog.open(PopupsconfittoComponent,{
      minWidth: '500px'}) 
      
    }
    else{
      this.livello ++
      this.prendiDomanda () //prende una nuva domanda
      
    }
  }
  ngOnInit():void{
    this.prendiDomanda()
  }

  prendiDomanda(){
    const DOMANDE_LV:Domanda[] = DOMANDE[this.livello] //prendo tutte le domande per il lv sottostante
    const N_DOMANDE:number = DOMANDE_LV.length // numero domande disponibile per il lv sottostante
    const N_CASUALE:number = Math.floor(Math.random() * N_DOMANDE )
    this.domanda = DOMANDE_LV[N_CASUALE] //prendo la domanda di posizione
    console.log(this.domanda)
  }

 // personacheAiutadaCasa(){
    //[
     // {
        //nome: "Angelo", cognome: "Bendotti", isOnline:true, color:"blue"
      //},
      //{
       // nome: "Alessandro", cognome: "Coppa",isOnline:true, color:"green"
      //},
      //{
        //nome: "Gabriele", cognome: "Radici",isOnline:true, color:"red"
     // },
      ////  nome: "Giacomo", cognome: "Bello",isOnline:true, color:"orange"
      //},
      //console.log("personacheAiutadaCasa")
    //]
  //}
      //trasforma il dato dopo il click in risposta corretta
 // onClick(){
    //[
     // {
      //  nome: this.rispostaAccesa.name, cognome: "Basili", isOnline:true, color:"pink"
      //},
      //{
        //nome: this.personacheAiutadaCasa.name, cognome: "Abdelaziz",isOnline:true, color:"brown"
      //},
      //{
        //nome: this.personacheAiutadaCasa.name, cognome: "Favarato",isOnline:true, color:"violet"
      //},
      //{
        //nome: this.personacheAiutadaCasa.name, cognome: "Leidi",isOnline:true, color:"grey"
      //},
      //console.log("personacheAiutadaCasa")
    //]

  }
//}
