import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild  ( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData( event ) {
    const data2 = Array(20);

    setTimeout(() => {
      this.data.push(...data2);
      this.infiniteScroll.complete();

      //Validar para que el infinitScroll se termine al llegar a 100
      if(this.data.length > 100) {
        this.infiniteScroll.disabled = true;
      }
    }, 1000);

    
  }

}
