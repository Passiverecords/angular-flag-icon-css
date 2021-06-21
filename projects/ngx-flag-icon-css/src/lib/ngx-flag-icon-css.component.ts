import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flag-icon',
  template: `
    <span [ngClass]="addingFlagClasses()"></span>
  `,
  styles: []
})
export class NgxFlagIconCssComponent implements OnInit {

  @Input() public country: string
  @Input() public squared: boolean

  constructor() {}

  ngOnInit(): void {
    this.squared = (this.squared != undefined)
  }

  addingFlagClasses(): string {
    return `flag-icon flag-icon-${this.country} ${this.squared?'flag-icon-squared':''}`
  }

}
