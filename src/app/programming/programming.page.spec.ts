import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProgrammingPage } from './programming.page';

describe('Tab1Page', () => {
  let component: ProgrammingPage;
  let fixture: ComponentFixture<ProgrammingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgrammingPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
