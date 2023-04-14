import { Risposta } from "./risposta"

export interface Domanda {
    testo: string //testo della domanda 
    //lv: number //livello domanda
    risposte: Risposta[] //array delle 4 risposte
}
