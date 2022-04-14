import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inputforms',
  templateUrl: './inputforms.page.html',
  styleUrls: ['./inputforms.page.scss'],
})
export class InputformsPage implements OnInit {

  email: string;
  password: string;

  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm) {
    console.log(formulario)
  }

}
