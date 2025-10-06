import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { MenuBar } from "./components/menu-bar/menu-bar";
import { Card } from "./components/card/card";
import { MenuSelect } from "./pages/menu-select/menu-select";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, MenuBar, MenuSelect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PS_store_app');
}
