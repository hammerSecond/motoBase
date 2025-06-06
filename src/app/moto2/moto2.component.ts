import { Component } from '@angular/core';
import { Moto2StandingsComponent } from '../moto2-standings/moto2-standings.component';
import { Moto2TeamStandingsComponent } from '../moto2-team-standings/moto2-team-standings.component';

@Component({
  selector: 'moto2',
  imports: [Moto2StandingsComponent, Moto2TeamStandingsComponent],
  templateUrl: './moto2.component.html',
  styleUrl: './moto2.component.css'
})
export class Moto2Component {

}
