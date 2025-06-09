import { afterRender, Component, ElementRef, inject } from '@angular/core';
import { Moto3ClassificationService } from '../services/moto3-classification.service';

@Component({
  selector: 'moto3-standings',
  imports: [],
  templateUrl: './moto3-standings.component.html',
  styleUrl: './moto3-standings.component.css'
})
export class Moto3StandingsComponent {
  classificationData:any;
    constructor(private moto3ClassificationService:Moto3ClassificationService){
      const elementRef = inject(ElementRef);
      afterRender(() => {
        let pointContainers: NodeListOf<HTMLElement> = elementRef.nativeElement.querySelectorAll('.riderPoints');
        let points: any[] = Array.from(pointContainers).map(point => point.textContent?.trim() || '');
        let teamContainers: NodeListOf<HTMLElement> = elementRef.nativeElement.querySelectorAll('.riderTeam');
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
        }
        });
      })
    }
    ngOnInit(){
      this.moto3ClassificationService.classificationList().subscribe((data:any)=>{
        this.classificationData=data.classification;
      })
    }
}
