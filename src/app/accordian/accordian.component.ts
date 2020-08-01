import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  accordianItems:any = [];
  constructor() { 
    this.accordianItems = [
      {
        "title": "accordian 1",
        "content": "content of accordian 1",
        "isVisible":false
      },
      {
        "title": "accordian 2",
        "content": "content of accordian 2",
        "isVisible":false
      },
      {
        "title": "accordian 3",
        "content": "content of accordian 3",
        "isVisible":false
      },
      {
        "title": "accordian 4",
        "content": "content of accordian 4",
        "isVisible":false
      }
    ]
  }

  ngOnInit() {
  }

  showAccordian(acc:any){
    if(acc.isVisible){
      acc.isVisible = false;
    }
    else{
      this.accordianItems.forEach(element => {
        if(element.title == acc.title){
          element.isVisible = true;
        }
        else{
          element.isVisible = false;
        }
      });
    }
  }
}
