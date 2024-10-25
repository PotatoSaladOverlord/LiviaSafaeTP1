import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreContenantComponent } from './carre-contenant.component';

describe('CarreContenantComponent', () => {
  let component: CarreContenantComponent;
  let fixture: ComponentFixture<CarreContenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreContenantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreContenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
