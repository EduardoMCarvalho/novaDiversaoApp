import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OPoderosoChefaoPage } from './o-poderoso-chefao.page';

describe('OPoderosoChefaoPage', () => {
  let component: OPoderosoChefaoPage;
  let fixture: ComponentFixture<OPoderosoChefaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OPoderosoChefaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OPoderosoChefaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
