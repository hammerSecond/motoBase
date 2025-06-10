import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GpClassificationService } from './services/gp-classification.service';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'motoDataBase';
  
  constructor(private gpClassificationService:GpClassificationService){}
  ngOnInit(){
    this.gpClassificationService.classificationList().subscribe()
  }
}
