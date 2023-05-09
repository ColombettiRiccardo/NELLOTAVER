import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenasaurComponent } from './venasaur.component';

describe('VenasaurComponent', () => {
  let component: VenasaurComponent;
  let fixture: ComponentFixture<VenasaurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenasaurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenasaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
