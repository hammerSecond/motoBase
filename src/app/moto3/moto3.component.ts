import { Component } from '@angular/core';
import { Moto3StandingsComponent } from '../moto3-standings/moto3-standings.component';
import { Moto3TeamStandingsComponent } from '../moto3-team-standings/moto3-team-standings.component';

@Component({
  selector: 'app-moto3',
  imports: [Moto3StandingsComponent, Moto3TeamStandingsComponent],
  templateUrl: './moto3.component.html',
  styleUrl: './moto3.component.css'
})
export class Moto3Component {

}
