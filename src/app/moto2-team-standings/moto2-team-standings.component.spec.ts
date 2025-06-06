import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moto2TeamStandingsComponent } from './moto2-team-standings.component';

describe('Moto2TeamStandingsComponent', () => {
  let component: Moto2TeamStandingsComponent;
  let fixture: ComponentFixture<Moto2TeamStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moto2TeamStandingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moto2TeamStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
