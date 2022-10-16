import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListComponentComponent } from './recipes-list-component.component';

describe('RecipesListComponentComponent', () => {
  let component: RecipesListComponentComponent;
  let fixture: ComponentFixture<RecipesListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
