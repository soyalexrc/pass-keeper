import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoped-component-a',
  templateUrl: './scoped-component-a.component.html',
  styleUrls: ['./scoped-component-a.component.scss']
})
export class ScopedComponentAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
