import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdataComponent } from './getdata.component';

describe('GetdataComponent', () => {
  let component: GetdataComponent;
  let fixture: ComponentFixture<GetdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
