import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ACacadaPage } from './a-cacada.page';

describe('ACacadaPage', () => {
  let component: ACacadaPage;
  let fixture: ComponentFixture<ACacadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACacadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ACacadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
