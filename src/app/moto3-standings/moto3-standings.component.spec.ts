import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moto3StandingsComponent } from './moto3-standings.component';

describe('Moto3StandingsComponent', () => {
  let component: Moto3StandingsComponent;
  let fixture: ComponentFixture<Moto3StandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moto3StandingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moto3StandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
