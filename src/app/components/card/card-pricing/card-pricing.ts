import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  imports: [],
  templateUrl: './card-pricing.html',
  styleUrl: './card-pricing.css'
})
export class CardPricing implements OnInit {
  @Input() 
  gameTitle:string="";


  @Input()
  gameConsole:string="";

  @Input()
  gameVelue:string = "";
  


  constructor(){}
  ngOnInit(): void {
    
  }

}
