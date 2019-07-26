import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Mittul';
  public hasError = false;
  public isSpecial = true;
  public highlightColor = 'orange';
  // object with all the style we want to apply
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };
  constructor() { }

  ngOnInit() {
  }

}
