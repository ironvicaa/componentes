import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContentPage } from '../modal-content/modal-content.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async onClick() {
    const modal = await this.modalController.create({
      component: ModalContentPage,
      componentProps: { //Envio los datos al componente hijo
        title: 'Card',
        subtitle: 'Unila'
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();//Recibo los datos enviados por el hijo
    console.log(data);
  }

}