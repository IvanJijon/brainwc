import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgressionPage } from './progression.page';

describe('Tab1Page', () => {
  let component: ProgressionPage;
  let fixture: ComponentFixture<ProgressionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressionPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
