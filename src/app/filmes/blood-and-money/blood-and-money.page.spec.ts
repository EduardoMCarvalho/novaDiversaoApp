import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloodAndMoneyPage } from './blood-and-money.page';

describe('BloodAndMoneyPage', () => {
  let component: BloodAndMoneyPage;
  let fixture: ComponentFixture<BloodAndMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodAndMoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloodAndMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
