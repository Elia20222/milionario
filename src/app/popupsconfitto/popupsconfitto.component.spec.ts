import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsconfittoComponent } from './popupsconfitto.component';

describe('PopupsconfittoComponent', () => {
  let component: PopupsconfittoComponent;
  let fixture: ComponentFixture<PopupsconfittoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupsconfittoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupsconfittoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
