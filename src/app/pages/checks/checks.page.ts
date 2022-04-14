import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.page.html',
  styleUrls: ['./checks.page.scss'],
})
export class ChecksPage implements OnInit {

  check: any[] = [
    {
      val: 'Item1',
      isChecked: true,
      color: 'primary'
    },

    {
      val: 'Item2',
      isChecked: false,
      color: 'secondary'
    },

    {
      val: 'Item3',
      isChecked: true,
      color: 'tertiary'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any) {
    console.log(item);

  }

  verData(event) {   
    console.log(event.data);
  }

}
