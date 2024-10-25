import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreCouleurComponent } from './carre-couleur.component';

describe('CarreCouleurComponent', () => {
  let component: CarreCouleurComponent;
  let fixture: ComponentFixture<CarreCouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreCouleurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreCouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
