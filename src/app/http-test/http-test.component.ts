import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  someData;
  imgsrc;

  constructor(private http:HttpClient) { }

  GetJSON() {
    this.http.get('assets/package.json').subscribe((data) =>{
    console.log(data);
    this.someData = data.name;
    });
  }

  GetMedia(){
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe((data1) =>{
      console.log(data1);
      this.imgsrc = data1;
    });
  }

  ngOnInit() {
    this.GetJSON();
    this.GetMedia();
  }

}
