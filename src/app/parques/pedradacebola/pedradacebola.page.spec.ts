import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedradacebolaPage } from './pedradacebola.page';

describe('PedradacebolaPage', () => {
  let component: PedradacebolaPage;
  let fixture: ComponentFixture<PedradacebolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedradacebolaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedradacebolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
