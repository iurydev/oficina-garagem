import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-administrativo',
  templateUrl: './home-administrativo.component.html',
  styleUrls: ['./home-administrativo.component.css']
})
export class HomeAdministrativoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async AlteraCorItem(identificador) { // Terminar: Essa lógica pode ser simplificada!?

    var classesHtml:any = document.getElementsByClassName("fas fa-circle-notch");
    for(var i = 0; i < classesHtml.length; i++) { // Define todas para preto
      classesHtml[i].style.color = "rgba(0,0,0,.5)"
    }
    document.getElementById(identificador).style.color = "#28a745" // Define a clicada para verde

  }

}
