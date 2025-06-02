import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGPStandingsComponent } from './home-gpstandings.component';

describe('HomeGPStandingsComponent', () => {
  let component: HomeGPStandingsComponent;
  let fixture: ComponentFixture<HomeGPStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGPStandingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGPStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
