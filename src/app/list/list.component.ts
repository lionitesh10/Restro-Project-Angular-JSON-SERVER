import { Component, OnInit } from '@angular/core';
import {RestroService} from '../restro.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  collections={}
  constructor(private restro:RestroService) { 
  }
  ngOnInit(): void {
    this.restro.getData().subscribe((result)=>{
      this.collections=result
      console.log(this.collections)
    })
  }

}
