import { afterRender, Component, ElementRef, inject } from '@angular/core';
import { GpClassificationService } from '../services/gp-classification.service';
import { team } from '../models/team.model';

@Component({
  selector: 'gp-team-standings',
  imports: [],
  templateUrl: './gp-team-standings.component.html',
  styleUrl: './gp-team-standings.component.css'
})
export class GpTeamStandingsComponent {
  teamClassificationData:any;
  teamList:any;
  constructor(private gpClassificationService:GpClassificationService){
    const elementRef = inject(ElementRef);
    afterRender(() => {
      let pointContainers: NodeListOf<HTMLElement> = elementRef.nativeElement.querySelectorAll('.teamPoints');
      let points: any[] = Array.from(pointContainers).map(point => point.textContent?.trim() || '');
      let teamContainers: NodeListOf<HTMLElement> = elementRef.nativeElement.querySelectorAll('.teamName');
      let teams: string[] = Array.from(teamContainers).map(team => team.textContent?.trim() || '');
      let maxPoints = points[0];
      let cont = 0;
      pointContainers.forEach(pointContainer => {
        let width = points[cont] / maxPoints * 100;
        width < 13 ? width = 13 : "";
        pointContainer.style.width = `${width}%`;
        switch (teams[cont++]){
          case "Ducati Lenovo Team":
            pointContainer.style.backgroundColor = `#ab0200`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "BK8 Gresini Racing MotoGP":
            pointContainer.style.backgroundColor = `#96afe7`;
            pointContainer.style.color = `black`;
            break;
          case "Pertamina Enduro VR46 Racing Team":
            pointContainer.style.backgroundColor = `#dbff02`;
            pointContainer.style.color = `black`;
            break;
          case "CASTROL Honda LCR":
            pointContainer.style.backgroundColor = `whitesmoke`;
            pointContainer.style.color = `black`;
            break;
          case "Aprilia Racing":
            pointContainer.style.backgroundColor = `#67239c`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "Monster Energy Yamaha MotoGP Team":
            pointContainer.style.backgroundColor = `#0e297a`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "Red Bull KTM Factory Racing":
            pointContainer.style.backgroundColor = `#fa802b`;
            pointContainer.style.color = `black`;
            break;
          case "Red Bull KTM Tech3":
            pointContainer.style.backgroundColor = `#e8711f`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "Trackhouse MotoGP Team":
            pointContainer.style.backgroundColor = `#0066c6`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "Honda HRC Castrol":
            pointContainer.style.backgroundColor = `#ef0401`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "Prima Pramac Yamaha MotoGP":
            pointContainer.style.backgroundColor = `#1c5bbd`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "Honda HRC Test Team":
            pointContainer.style.backgroundColor = `#7b0001`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "IDEMITSU Honda LCR":
            pointContainer.style.backgroundColor = `whitesmoke`;
            pointContainer.style.color = `black`;
            break;
        }
      });
    })
  }
  ngOnInit(){
    this.gpClassificationService.classificationList().subscribe((data:any)=>{
      this.teamClassificationData = data.classification;
      let teamNames: string[] = [];
      let teamPoints: number[] = [];
      for(let classification of this.teamClassificationData){
        !teamNames.includes(classification.team.name) ? teamPoints.push(0) : "";
        !teamNames.includes(classification.team.name) ? teamNames.push(classification.team.name) : "";
      }
      for(let classification of this.teamClassificationData){
        teamPoints[teamNames.indexOf(classification.team.name)] = teamPoints[teamNames.indexOf(classification.team.name)] + classification.points
      }
      let teams: team[] = [];
      for (let c = 0; c < teamNames.length; c++){
        teams.push(new team(teamNames[c], 0 + teamPoints[c]));
      }
      this.teamList = teams.sort(({points:a}, {points:b}) => b-a);
    })
  }
}
