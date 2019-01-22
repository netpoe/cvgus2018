import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarcomWalmartReportsDashboardComponent } from './starcom-walmart-reports-dashboard.component';

describe('StarcomWalmartReportsDashboardComponent', () => {
  let component: StarcomWalmartReportsDashboardComponent;
  let fixture: ComponentFixture<StarcomWalmartReportsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarcomWalmartReportsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarcomWalmartReportsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
