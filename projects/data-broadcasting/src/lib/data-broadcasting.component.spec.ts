import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBroadcastingComponent } from './data-broadcasting.component';

describe('DataBroadcastingComponent', () => {
  let component: DataBroadcastingComponent;
  let fixture: ComponentFixture<DataBroadcastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBroadcastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBroadcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
