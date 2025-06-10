import {
  afterRender,
  Component,
  ElementRef,
  Inject,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { Moto2ClassificationService } from '../services/moto2-classification.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'moto2-standings',
  imports: [],
  templateUrl: './moto2-standings.component.html',
  styleUrl: './moto2-standings.component.css',
})
export class Moto2StandingsComponent {
  classificationData: any;
  constructor(
    private moto2ClassificationService: Moto2ClassificationService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    const elementRef = inject(ElementRef);
    afterRender(() => {
      let pointContainers: NodeListOf<HTMLElement> =
        elementRef.nativeElement.querySelectorAll('.riderPoints');
      let points: any[] = Array.from(pointContainers).map(
        (point) => point.textContent?.trim() || ''
      );
      let teamContainers: NodeListOf<HTMLElement> =
        elementRef.nativeElement.querySelectorAll('.riderTeam');
      let teams: string[] = Array.from(teamContainers).map(
        (team) => team.textContent?.trim() || ''
      );
      let maxPoints = points[0];
      let cont = 0;
      pointContainers.forEach((pointContainer) => {
        let width = (points[cont] / maxPoints) * 100;
        width < 13 ? (width = 13) : '';
        pointContainer.style.width = `${width}%`;
        switch (teams[cont++]) {
          case 'LIQUI MOLY Dynavolt Intact GP':
            pointContainer.style.backgroundColor = `#5a5051`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case 'Fantic Racing Lino Sonego':
            pointContainer.style.backgroundColor = `#a80534`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case 'Italtrans Racing Team':
            pointContainer.style.backgroundColor = `#0c70ab`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case 'ELF Marc VDS Racing Team':
            pointContainer.style.backgroundColor = `#642c39`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case 'Red Bull KTM Ajo':
            pointContainer.style.backgroundColor = `#ff5f08`;
            pointContainer.style.color = `black`;
            break;
          case 'Onlyfans American Racing Team':
            pointContainer.style.backgroundColor = `#0f37b1`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case 'Beta Tools SpeedRS Team':
            pointContainer.style.backgroundColor = `#f74b47`;
            pointContainer.style.color = `black`;
            break;
          case 'ITALJET Gresini Moto2':
            pointContainer.style.backgroundColor = `#98abed`;
            pointContainer.style.color = `black`;
            break;
          case 'CFMOTO Inde Aspar Team':
            pointContainer.style.backgroundColor = `#0c95b9`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case 'BLU CRU Pramac Yamaha Moto2':
            pointContainer.style.backgroundColor = `#1c5bbd`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case 'QJMOTOR - FRINSA - MSI':
            pointContainer.style.backgroundColor = `#dc0a27`;
            pointContainer.style.color = `whitesmoke`;
            break;
          case 'KLINT Forward Factory Team':
            pointContainer.style.backgroundColor = `#70cfbb`;
            pointContainer.style.color = `black`;
            break;
          case 'RW-Idrofoglia Racing GP':
            pointContainer.style.backgroundColor = `#4cade4`;
            pointContainer.style.color = `black`;
            break;
          case 'Idemitsu Honda Team Asia':
            pointContainer.style.backgroundColor = `#f6fbff`;
            pointContainer.style.color = `black`;
            break;
          case 'RW - Idrofoglia Racing GP':
            pointContainer.style.backgroundColor = `#4cade4`;
            pointContainer.style.color = `black`;
            break;
          default:
            pointContainer.style.backgroundColor = `rgba(72, 199, 142, 255)`;
            pointContainer.style.color = `black`;
            break;
        }
      });
    });
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.moto2ClassificationService
        .classificationList()
        .subscribe((data: any) => {
          this.classificationData = data.classification;
        });
    }
  }
}
