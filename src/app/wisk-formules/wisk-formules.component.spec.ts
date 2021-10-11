import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiskFormulesComponent } from './wisk-formules.component';

describe('WiskFormulesComponent', () => {
  let component: WiskFormulesComponent;
  let fixture: ComponentFixture<WiskFormulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiskFormulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiskFormulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
