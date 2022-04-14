import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>
  students: Observable<any>
  
  @ViewChild(IonList) ionList: IonList

  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.usuarios = this.dataService.getUsers()
     this.students = this.dataService.getStudents()
  }

  favorite(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  unread(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

}









// import { Component, OnInit, ViewChild } from '@angular/core';
// import { DataService } from 'src/app/services/data.service';
// import { Observable } from 'rxjs';
// import { IonList } from '@ionic/angular';



// @Component({
//   selector: 'app-list',
//   templateUrl: './list.page.html',
//   styleUrls: ['./list.page.scss'],
// })
// export class ListPage implements OnInit {

//   usuarios: Observable<any>
//   data: Observable<any>
//   @ViewChild(IonList) ionList: IonList

//   constructor(private dataService: DataService) { }
 
//   ngOnInit() {
//     this.usuarios = this.dataService.getUsers();
    
//   }

//   favorite(user: any) {
//     console.log(user);
//     this.ionList.closeSlidingItems();
//   }

//   share(user: any) {
//     console.log(user);
//     this.ionList.closeSlidingItems();
//   }

//   unread(user: any) {
//     console.log(user);
//     this.ionList.closeSlidingItems();
//   }

// }
