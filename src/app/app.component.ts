import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  profileForm = this.fb.group({
    firstName: ['anil', Validators.required]
  });

  name = 'Angular';
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
      console.log(this.profileForm.value);
  }
}
