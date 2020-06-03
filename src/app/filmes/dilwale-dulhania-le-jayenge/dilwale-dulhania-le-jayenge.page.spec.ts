import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DilwaleDulhaniaLeJayengePage } from './dilwale-dulhania-le-jayenge.page';

describe('DilwaleDulhaniaLeJayengePage', () => {
  let component: DilwaleDulhaniaLeJayengePage;
  let fixture: ComponentFixture<DilwaleDulhaniaLeJayengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilwaleDulhaniaLeJayengePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DilwaleDulhaniaLeJayengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
