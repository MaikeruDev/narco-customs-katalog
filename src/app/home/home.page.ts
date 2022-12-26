import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  color_name: any = "Cock Rot"
  category: any = "Sport"

  category_change(c: any){
    this.category = c;
  }

}
