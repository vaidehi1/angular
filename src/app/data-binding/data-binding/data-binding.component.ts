import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  textBlue:boolean = false;
  textBold:boolean = false;
  textItalic:boolean = false;
  data:any = {};
  constructor() { }

  ngOnInit() {
  }

  makeTextBlue(){
    console.log("blue button click");
    this.textBlue = true;
  }

  makeTextBold(){
    console.log("bold button click");
    this.textBold = true;
  }

  makeTextItalic(){
    console.log("italic button click");
    this.textItalic = true;
  }

}
