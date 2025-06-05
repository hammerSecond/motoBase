import { Component } from '@angular/core';
import { HomeGPStandingsComponent } from '../home-gpstandings/home-gpstandings.component';
import { GpTeamStandingsComponent } from '../gp-team-standings/gp-team-standings.component';

@Component({
  selector: 'app-home',
  imports: [HomeGPStandingsComponent, GpTeamStandingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
