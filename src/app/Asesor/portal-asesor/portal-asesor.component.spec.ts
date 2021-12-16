import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAsesorComponent } from './portal-asesor.component';

describe('PortalAsesorComponent', () => {
  let component: PortalAsesorComponent;
  let fixture: ComponentFixture<PortalAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
