import { Component, OnInit } from '@angular/core';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-menu-select',
  imports: [Card],
  templateUrl: './menu-select.html',
  styleUrl: './menu-select.css'
})
export class MenuSelect implements OnInit {
  ngOnInit(): void {
    
  }

}
