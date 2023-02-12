import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    id:1,
    isFavorite:false
  }
  onFavoriteChanged(isFavorite:any){
    console.log('onFavoriteChanged: ',isFavorite);
  }
}
