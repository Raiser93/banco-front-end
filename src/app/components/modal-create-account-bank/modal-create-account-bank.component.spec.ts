import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCreateAccountBankComponent } from './modal-create-account-bank.component';

describe('ModalCreateAccountBankComponent', () => {
  let component: ModalCreateAccountBankComponent;
  let fixture: ComponentFixture<ModalCreateAccountBankComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateAccountBankComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCreateAccountBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
