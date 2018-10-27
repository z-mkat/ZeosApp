import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackBrowserComponent } from './pack-browser.component';

describe('PackBrowserComponent', () => {
	let component: PackBrowserComponent;
	let fixture: ComponentFixture<PackBrowserComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PackBrowserComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PackBrowserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});