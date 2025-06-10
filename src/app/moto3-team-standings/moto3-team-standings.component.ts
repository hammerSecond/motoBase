import { afterRender, Component, ElementRef, Inject, inject, PLATFORM_ID } from '@angular/core';
import { Moto3ClassificationService } from '../services/moto3-classification.service';
import { team } from '../models/team.model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'moto3-team-standings',
  imports: [],
  templateUrl: './moto3-team-standings.component.html',
  styleUrl: './moto3-team-standings.component.css'
})
export class Moto3TeamStandingsComponent {
  teamClassificationData:any;
  teamList:any;
  constructor(private moto3ClassificationService:Moto3ClassificationService, @Inject(PLATFORM_ID) private platformId: any){
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
          case "LIQUI MOLY Dynavolt Intact GP":
            pointContainer.style.backgroundColor = `#5a5051`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "FRINSA - MT Helmets - MSI":
            pointContainer.style.backgroundColor = `#ff4035`;
            pointContainer.style.color = `black`;
            break;
          case "LEVELUP-MTA":
            pointContainer.style.backgroundColor = `#e54c51`;
            pointContainer.style.color = `black`;
            break;
          case "Honda Team Asia":
            pointContainer.style.backgroundColor = `#fffdff`;
            pointContainer.style.color = `black`;
            break;
          case "Red Bull KTM Ajo":
            pointContainer.style.backgroundColor = `#ff5f08`;
            pointContainer.style.color = `black`;
            break;
          case "SIC58 Squadra Corse":
            pointContainer.style.backgroundColor = `#e2232a`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "Leopard Racing":
            pointContainer.style.backgroundColor = `#74cbd4`;
            pointContainer.style.color = `black`;
            break;
          case "CFMOTO Viel Aspar Team":
            pointContainer.style.backgroundColor = `#009fb3`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "Red Bull KTM Tech3":
            pointContainer.style.backgroundColor = `#dc5600`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "CIP Green Power":
            pointContainer.style.backgroundColor = `#79cb5c`;
            pointContainer.style.color = `black`;
            break;
          case "Rivacold Snipers Team":
            pointContainer.style.backgroundColor = `#fde00a`;
            pointContainer.style.color = `black`;
            break;
          case "DENSSI Racing - BOE":
            pointContainer.style.backgroundColor = `#af1223`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "GRYD - Mlav Racing":
            pointContainer.style.backgroundColor = `#049e9e`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case "Idemitsu Honda Team Asia":
            pointContainer.style.backgroundColor = `#f6fbff`;
            pointContainer.style.color = `black`;
            break;
          case "RW - Idrofoglia Racing GP":
            pointContainer.style.backgroundColor = `#4cade4`;
            pointContainer.style.color = `black`;
            break;
          default:
            pointContainer.style.backgroundColor = `rgba(72, 199, 142, 255)`;
            pointContainer.style.color = `black`;
            break;
        }
      });
    })
  }
  ngOnInit(){
    if (isPlatformBrowser(this.platformId)) {
    this.moto3ClassificationService.classificationList().subscribe((data:any)=>{
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
}
