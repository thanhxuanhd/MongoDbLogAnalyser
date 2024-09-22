import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDbAnalyzerComponent } from './mongo-db-analyzer.component';

describe('MongoDbAnalyzerComponent', () => {
  let component: MongoDbAnalyzerComponent;
  let fixture: ComponentFixture<MongoDbAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MongoDbAnalyzerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongoDbAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
