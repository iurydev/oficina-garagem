import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})

export class HomeDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  seleciona_modulo() {
    $('#btn-minimizar').click();
  }

}
