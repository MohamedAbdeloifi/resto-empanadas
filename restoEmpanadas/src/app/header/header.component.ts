import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  check:boolean=false;
  checkRubrique:boolean=true;
  checkSortir:boolean=false;
  



  affiche(){
   if(this.check== false){
     this.check=true;
   }else{
     this.check=false;
   }

   if(this.checkSortir== false){
     this.checkSortir=true;
   }else{
     this.checkSortir=false;
   }


  
  }

  sousRub(){
     if(this.checkRubrique== false){
     this.checkRubrique=true;
   }else{
     this.checkRubrique=false;
   }
    
  }
  

}
