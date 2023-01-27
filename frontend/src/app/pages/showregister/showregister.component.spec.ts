import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowregisterComponent } from './showregister.component';

describe('ShowregisterComponent', () => {
  let component: ShowregisterComponent;
  let fixture: ComponentFixture<ShowregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
