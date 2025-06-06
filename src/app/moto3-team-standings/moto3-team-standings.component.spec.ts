import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moto3TeamStandingsComponent } from './moto3-team-standings.component';

describe('Moto3TeamStandingsComponent', () => {
  let component: Moto3TeamStandingsComponent;
  let fixture: ComponentFixture<Moto3TeamStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moto3TeamStandingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moto3TeamStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
