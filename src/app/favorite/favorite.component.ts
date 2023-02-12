import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs:['isFavorite'],
})
export class FavoriteComponent {
  @Output() change=new EventEmitter()
  isFavorite=false
  changeFavorite(){
    this.isFavorite=!this.isFavorite
    this.change.emit(this.isFavorite)
  }
}
