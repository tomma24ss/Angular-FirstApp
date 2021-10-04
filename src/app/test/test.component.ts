import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
interface User {
  id: number;
  name: string;
  leeftijd: number;
  job: string;
  adres: string;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})

export class TestComponent implements OnInit {
  public users: User[] = [];
  name: string = '';
  counter: number = 0;
  currentuser: number = 0;
  form: FormGroup;
  isHidden: Boolean = true;
  clicked: Boolean = false;

  constructor() {}
  ngOnInit() {
    this.setFormGroup({id: undefined, name: "", leeftijd: undefined, job: "", adres: ""});
  }
  setUser(value: string) {
    this.users.push({
      id: this.counter, 
      name: value, 
      leeftijd: undefined, 
      job: "", 
      adres: ""
    });
    this.counter++;
  }
  showUser(value: User){
    //vorige user opslaan
    if(this.clicked == true) {
      this.users[this.currentuser].name = this.form.controls['naam'].value;
      this.users[this.currentuser].leeftijd = this.form.controls['leeftijd'].value;
      this.users[this.currentuser].job = this.form.controls['job'].value;
      this.users[this.currentuser].adres = this.form.controls['adres'].value;
    }
    //nieuwe user weergeven
    this.clicked = true;
    this.currentuser = value.id;
    this.setFormGroup({
      id: undefined,
      name: value.name, 
      leeftijd: value.leeftijd == undefined ? undefined : value.leeftijd, 
      job: value.job == null ? null : value.job, 
      adres: value.adres == null ? null : value.adres
    })
    this.isHidden = false;
  }
  setFormGroup(value: User) {
    this.form = new FormGroup({
      naam: new FormControl(value.name == undefined ? undefined : value.name),
      leeftijd: new FormControl(value.leeftijd == undefined ? undefined : value.leeftijd),
      job: new FormControl(value.job == null ? null : value.job),
      adres: new FormControl(value.adres == null ? null : value.adres)
    });
  }
  addStyle(el: Element){
    el.classList.add('font-weight-bold');
  }
  removeStyle(el: Element){
    el.classList.remove('font-weight-bold')
  }
}
