import { Component, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]
@Output()
public onDeleteOne: EventEmitter<string> = new EventEmitter();


  onDelete(id?: string ):void{
    // TODO: Emitir el ID del personaje
    if ( !id) return;

    this.onDeleteOne.emit( id )
  }

}
