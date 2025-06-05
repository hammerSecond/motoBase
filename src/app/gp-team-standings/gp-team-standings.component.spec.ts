import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpTeamStandingsComponent } from './gp-team-standings.component';

describe('GpTeamStandingsComponent', () => {
  let component: GpTeamStandingsComponent;
  let fixture: ComponentFixture<GpTeamStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpTeamStandingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpTeamStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
