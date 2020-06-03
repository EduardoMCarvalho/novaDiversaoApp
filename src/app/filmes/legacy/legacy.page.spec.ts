import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegacyPage } from './legacy.page';

describe('LegacyPage', () => {
  let component: LegacyPage;
  let fixture: ComponentFixture<LegacyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
