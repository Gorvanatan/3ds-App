import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelDetailPage } from './model-detail.page';

describe('ModelDetailPage', () => {
  let component: ModelDetailPage;
  let fixture: ComponentFixture<ModelDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
