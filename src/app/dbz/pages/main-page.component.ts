import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  // dbzService: DbzService = inject (DbzService)


  constructor(private dbzService : DbzService){}

  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(characters:Character){
    this.dbzService.onNewCharacter_Padre(characters);
  }
}
