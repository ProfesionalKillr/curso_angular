import { Component, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter_Hijo: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
    name:'',
    power:0
  }

  emitCharacter():void{

    console.log(this.character)

    if(this.character.name.length === 0) return;
    this.onNewCharacter_Hijo.emit(this.character)
    this.character = {name: '', power: 0};

  }

}
