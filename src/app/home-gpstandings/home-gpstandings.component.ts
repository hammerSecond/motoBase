import { afterRender, Component, ElementRef, inject } from '@angular/core';
import { GpClassificationService } from '../services/gp-classification.service';

@Component({
  selector: 'home-gpstandings',
  imports: [],
  templateUrl: './home-gpstandings.component.html',
  styleUrl: './home-gpstandings.component.css'
})
export class HomeGPStandingsComponent {

  classificationData:any;
  constructor(private gpClassificationService:GpClassificationService){
    const elementRef = inject(ElementRef);
    afterRender(() => {
      let points: string[] = elementRef.nativeElement.querySelectorAll('.riderPoints');
      points.forEach( point => {
        console.log(point);
      });
    })
  }
  ngOnInit(){
    this.gpClassificationService.classificationList().subscribe((data:any)=>{
      this.classificationData=data.classification;
    })
  }
  
}
