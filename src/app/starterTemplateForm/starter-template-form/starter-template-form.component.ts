import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter-template-form',
  templateUrl: './starter-template-form.component.html',
  styleUrls: ['./starter-template-form.component.css']
})
export class StarterTemplateFormComponent implements OnInit {
  public customer: any;
  public message: string
  
  constructor() { }

  ngOnInit() {
      this.customer = {
          firstName: 'Shakil Mansuri'
      };
  }

  onSubmit() {
      this.message = 'You typed: ' + this.customer.firstName;
  }

}
