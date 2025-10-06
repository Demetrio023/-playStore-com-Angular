import { Component, Input, OnInit } from '@angular/core';
import { CardLabel } from "./card-label/card-label";
import { CardPricing } from "./card-pricing/card-pricing";

@Component({
  selector: 'app-card',
  imports: [CardLabel, CardPricing],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {



@Input()
gameCover:string=""

 @Input()
  gameLabel:string=""

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
export { CardPricing, CardLabel };

