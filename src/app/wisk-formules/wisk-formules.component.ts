import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
interface tabel {
  binary: string,
  decimal: number,
  hexa: string,
  octaal: number
}
@Component({
  selector: 'app-wisk-formules',
  templateUrl: './wisk-formules.component.html',
  styleUrls: ['./wisk-formules.component.css']
})
export class WiskFormulesComponent implements OnInit {

  nummer: number;
  binary: string = "";
  hexa: string = "";
  octaal: string = "";
  kolom: tabel[] = [
    {binary: "0000",decimal: 0,hexa: "0", octaal: 0},
    {binary: "0001",decimal: 1,hexa: "1", octaal: 1},
    {binary: "0010",decimal: 2,hexa: "2", octaal: 2},
    {binary: "0011",decimal: 3,hexa: "3", octaal: 3},
    {binary: "0100",decimal: 4,hexa: "4", octaal: 4},
    {binary: "0101",decimal: 5,hexa: "5", octaal: 5},
    {binary: "0110",decimal: 6,hexa: "6", octaal: 6},
    {binary: "0111",decimal: 7,hexa: "7", octaal: 7},
    {binary: "1000",decimal: 8,hexa: "8", octaal: 10},
    {binary: "1001",decimal: 9,hexa: "9", octaal: 11},
    {binary: "1010",decimal: 10,hexa: "A", octaal: 12},
    {binary: "1011",decimal: 11,hexa: "B", octaal: 13},
    {binary: "1100",decimal: 12,hexa: "C", octaal: 14},
    {binary: "1101",decimal: 13,hexa: "D", octaal: 15},
    {binary: "1110",decimal: 14,hexa: "E", octaal: 16},
    {binary: "1111",decimal: 15,hexa: "F", octaal: 17},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  Transform(value: number) {
    this.binary = this.toBinary(value, 4);
    this.hexa = this.toHexa(this.toBinary(value, 4));
    this.octaal = this.toOctaal(this.toBinary(value, 3));
  }
  toOctaal(value: string) {
    var octaalcode = "";
    for(var i = 0; i < value.length / 3; i++) {
      var chunk = value.substr(i * 3, 3);
      for(var j = 0; j < 8; j++) {
        var rij = this.kolom[j];
        if(rij.binary.substr(1,3) == chunk) octaalcode += rij.octaal;
      }
    }
    return octaalcode;
  }
  toHexa(value: string) {
    var hexacode = "";
    for(var i = 0; i < value.length / 4; i++) {
      var chunk = value.substr(i * 4, 4);
      this.kolom.forEach(rij => {
        if(rij.binary == chunk) hexacode += rij.hexa;
      });
    }
    return hexacode;
  }
  toBinary(value: number, bitcount: number) {
    var bits = "";
    while(value > 0) {
      var rest = value % 2;
      bits = rest + bits;
      value = Math.floor(value / 2);
    }
    while(bits.length % bitcount != 0) {
      bits = 0 + bits;
    }
    return bits;
  }

}
