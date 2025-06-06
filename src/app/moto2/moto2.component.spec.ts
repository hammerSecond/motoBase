import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moto2Component } from './moto2.component';

describe('Moto2Component', () => {
  let component: Moto2Component;
  let fixture: ComponentFixture<Moto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moto2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
