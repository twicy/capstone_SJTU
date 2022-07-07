import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningDetailComponent } from './warning-detail.component';

describe('WarningDetailComponent', () => {
    let component: WarningDetailComponent;
    let fixture: ComponentFixture<WarningDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WarningDetailComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(WarningDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
