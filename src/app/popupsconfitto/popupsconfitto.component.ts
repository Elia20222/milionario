import { Component } from '@angular/core';

@Component({
  selector: 'app-popupsconfitto',
  templateUrl: './popupsconfitto.component.html',
  styleUrls: ['./popupsconfitto.component.css']
})
export class PopupsconfittoComponent {
  riprova(){
    window.location.reload()
  }

}
