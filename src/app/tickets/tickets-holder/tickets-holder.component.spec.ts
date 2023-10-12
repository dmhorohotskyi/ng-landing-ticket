import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsHolderComponent } from './tickets-holder.component';

describe('TicketsHolderComponent', () => {
  let component: TicketsHolderComponent;
  let fixture: ComponentFixture<TicketsHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
