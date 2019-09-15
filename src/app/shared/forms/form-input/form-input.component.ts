import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html'
})
export class FormInputComponent implements OnInit {
  @Input() label;
  @Input() placeholder;

  constructor() { }

  ngOnInit() {
  }
}