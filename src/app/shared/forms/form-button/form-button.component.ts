import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html'
})
export class FormButtonComponent implements OnInit {
  @Input() submitText;

  constructor() { }

  ngOnInit() {
  }

}
