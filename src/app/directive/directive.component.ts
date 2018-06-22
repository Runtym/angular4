import { Component, OnInit } from '@angular/core';
import {Animal} from './animal';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  animal:Animal;
  animalList:Array<Animal>;
  name:string='abc';
  constructor() { 
    this.animalList = [];
    this.animal = new Animal("고양이",5);
    this.animalList.push(this.animal);
    this.animal = new Animal("개",3);
    this.animalList.push(this.animal);
    this.animal = new Animal("햄스터",2);
    this.animalList.push(this.animal);
    this.animal = new Animal("거북이",2);
    this.animalList.push(this.animal);
  }

  ngOnInit() {
  }

}
