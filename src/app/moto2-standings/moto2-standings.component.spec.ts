import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moto2StandingsComponent } from './moto2-standings.component';

describe('Moto2StandingsComponent', () => {
  let component: Moto2StandingsComponent;
  let fixture: ComponentFixture<Moto2StandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moto2StandingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moto2StandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
