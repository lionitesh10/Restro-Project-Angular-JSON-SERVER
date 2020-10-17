import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestroService} from '../restro.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  alert:boolean=false;
  editRestro=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(),
    email:new FormControl('')  
  })
  constructor(private router:ActivatedRoute,private restro:RestroService) { }

  ngOnInit(): void {
    this.restro.getCurrentRestro(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestro=new FormGroup({
        name:new FormControl(result['name']),
        address:new FormControl(result['address']),
        email:new FormControl(result['email'])
      })  
    })
  }
  collection(){
    console.warn(this.editRestro.value);
    this.restro.updateRestro(this.router.snapshot.params.id,this.editRestro.value).subscribe((result)=>{
      console.warn(result)
    })
    this.alert=true
  }
  clear_alert(){
    this.alert=false
  }
}
