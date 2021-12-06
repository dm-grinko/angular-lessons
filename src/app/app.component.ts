import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products = [
    {
      name: "product 1",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      isSold: false,
    }, 
    {
      name: "product 2",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      isSold: true,
    }, 
    {
      name: "product 3",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      isSold: false,
    }, 
    {
      name: "product 4",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      isSold: false,
    },
  ];
}
