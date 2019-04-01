import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child-component.html',
  styleUrls: [ './child-component.css' ]
})
export class ChildComponent  {
  @Input() childInput;
  @Output() childOutput: EventEmitter<Object> = new EventEmitter<Object>();

  passdata(){
    this.childOutput.emit({childData: "pass the data"});
  }
}