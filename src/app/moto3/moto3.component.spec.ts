import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moto3Component } from './moto3.component';

describe('Moto3Component', () => {
  let component: Moto3Component;
  let fixture: ComponentFixture<Moto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moto3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
