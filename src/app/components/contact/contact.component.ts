import { Component, OnInit } from '@angular/core';

 import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {

  }

  onSubmit(){
    alert("Form Submited");
  }


  }




