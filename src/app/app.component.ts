import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'motoDataBase';

  private readonly driversService = inject(this.driversService);
  public drivers: Signal<Driver[]>;
  constructor(){
    const resource = 
    this.drivers = computed(() => this.driversService.getDrivers())
  }
}
