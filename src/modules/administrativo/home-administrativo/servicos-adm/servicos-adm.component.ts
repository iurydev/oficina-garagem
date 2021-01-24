import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-servicos-adm",
  templateUrl: "./servicos-adm.component.html",
  styleUrls: ["./servicos-adm.component.css"],
})
export class ServicosAdmComponent implements OnInit {
  formulario: FormGroup;
  exibeAddServico: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.IniciarFormulario();
  }

  IniciarFormulario() {
    this.formulario = this.formBuilder.group({
      control_descricao: [null, Validators.required],
      control_cliente: [null, Validators.required],
      control_valor: [null, Validators.required],
      control_data_entrega: [null, Validators.required],
      control_status: [null, Validators.required],
    });
  }

  AddNovoServico() {
    this.exibeAddServico = true;
  }
}
