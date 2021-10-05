import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-secretchat',
  templateUrl: './secretchat.component.html',
  styleUrls: ['./secretchat.component.css']
})
export class SecretchatComponent implements OnInit {
  texts: string[] = [];
  encrypttexts: string[] = [];
  text: string = "";
  encryptSecretKey: string = "tomma1234";
  constructor() { }

  ngOnInit(): void {
  }

  addText(value: string) {
    this.texts.push(value);
    this.encrypttexts.push(this.encryptData(value));
  }
  encryptData(data) {
    var encrypt = "";
    try {
      encrypt = CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
    } catch (e) {
      console.log(e);
    }
    return encrypt;
  }

  decryptData(data) {

    try {
      const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
