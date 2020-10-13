import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MateTimepickerContentComponent } from './timepicker-content/timepicker-content.component';
import { MateTimepickerDialogBodyComponent } from './timepicker-dialog-body/timepicker-dialog-body.component';
import { MateTimepickerDialogFooterComponent } from './timepicker-dialog-footer/timepicker-dialog-footer.component';
import { MateTimepickerDialogHeaderComponent } from './timepicker-dialog-header/timepicker-dialog-header.component';
import { MateTimepickerDialogHourComponent } from './timepicker-dialog-hour/timepicker-dialog-hour.component';
import { MateTimepickerDialogMinuteComponent } from './timepicker-dialog-minute/timepicker-dialog-minute.component';
import { MateTimepickerDialogComponent } from './timepicker-dialog/timepicker-dialog.component';
import { MateTimepickerFace } from './timepicker-face/timepicker-face.directive';
import { MateTimepickerInputDirective } from './timepicker-input.directive';
import { MateTimepickerIntlService } from './timepicker-intl.service';
import { MateTimepickerToggleComponent, MateTimepickerToggleIconDirective } from './timepicker-toggle/timepicker-toggle.component';
import { MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MateTimepickerComponent } from './timepicker/timepicker.component';
import * as i0 from "@angular/core";
export class MateTimepickerModule {
}
MateTimepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: MateTimepickerModule });
MateTimepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MateTimepickerModule_Factory(t) { return new (t || MateTimepickerModule)(); }, providers: [
        MateTimepickerIntlService,
        MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
    ], imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            OverlayModule,
            A11yModule,
            PortalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MateTimepickerModule, { declarations: [MateTimepickerFace,
        MateTimepickerComponent,
        MateTimepickerContentComponent,
        MateTimepickerToggleComponent,
        MateTimepickerToggleIconDirective,
        MateTimepickerInputDirective,
        MateTimepickerDialogComponent,
        MateTimepickerDialogBodyComponent,
        MateTimepickerDialogHeaderComponent,
        MateTimepickerDialogFooterComponent,
        MateTimepickerDialogHourComponent,
        MateTimepickerDialogMinuteComponent], imports: [CommonModule,
        MatButtonModule,
        MatDialogModule,
        OverlayModule,
        A11yModule,
        PortalModule], exports: [MateTimepickerComponent,
        MateTimepickerContentComponent,
        MateTimepickerToggleComponent,
        MateTimepickerToggleIconDirective,
        MateTimepickerInputDirective,
        MateTimepickerDialogComponent,
        MateTimepickerDialogBodyComponent,
        MateTimepickerDialogHeaderComponent,
        MateTimepickerDialogFooterComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MateTimepickerFace,
                    MateTimepickerComponent,
                    MateTimepickerContentComponent,
                    MateTimepickerToggleComponent,
                    MateTimepickerToggleIconDirective,
                    MateTimepickerInputDirective,
                    MateTimepickerDialogComponent,
                    MateTimepickerDialogBodyComponent,
                    MateTimepickerDialogHeaderComponent,
                    MateTimepickerDialogFooterComponent,
                    MateTimepickerDialogHourComponent,
                    MateTimepickerDialogMinuteComponent
                ],
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    OverlayModule,
                    A11yModule,
                    PortalModule
                ],
                providers: [
                    MateTimepickerIntlService,
                    MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
                ],
                entryComponents: [
                    MateTimepickerContentComponent,
                    MateTimepickerDialogComponent,
                    MateTimepickerDialogBodyComponent,
                    MateTimepickerDialogHeaderComponent,
                    MateTimepickerDialogFooterComponent
                ],
                exports: [
                    MateTimepickerComponent,
                    MateTimepickerContentComponent,
                    MateTimepickerToggleComponent,
                    MateTimepickerToggleIconDirective,
                    MateTimepickerInputDirective,
                    MateTimepickerDialogComponent,
                    MateTimepickerDialogBodyComponent,
                    MateTimepickerDialogHeaderComponent,
                    MateTimepickerDialogFooterComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiRDovRG9jdW1lbnQvTGlicmFyeS9Bbmd1bGFyL21hdGVyaWFsLWV4dHJhL3Byb2plY3RzL21hdGVyaWFsL3RpbWVwaWNrZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3RpbWVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFekQsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDNUcsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDbEgsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDbEgsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDNUcsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDbEgsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDOUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFDLDZCQUE2QixFQUFFLGlDQUFpQyxFQUFDLE1BQU0saURBQWlELENBQUM7QUFDakksT0FBTyxFQUFDLGdEQUFnRCxFQUFFLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7O0FBZ0Q1SCxNQUFNLE9BQU8sb0JBQW9COzt3REFBcEIsb0JBQW9CO3VIQUFwQixvQkFBb0IsbUJBdkJsQjtRQUNQLHlCQUF5QjtRQUN6QixnREFBZ0Q7S0FDbkQsWUFYUTtZQUNMLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLGFBQWE7WUFDYixVQUFVO1lBQ1YsWUFBWTtTQUNmO3dGQXdCUSxvQkFBb0IsbUJBNUN6QixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsaUNBQWlDO1FBQ2pDLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IsaUNBQWlDO1FBQ2pDLG1DQUFtQztRQUNuQyxtQ0FBbUM7UUFDbkMsaUNBQWlDO1FBQ2pDLG1DQUFtQyxhQUduQyxZQUFZO1FBQ1osZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO1FBQ2IsVUFBVTtRQUNWLFlBQVksYUFjWix1QkFBdUI7UUFDdkIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QixpQ0FBaUM7UUFDakMsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixpQ0FBaUM7UUFDakMsbUNBQW1DO1FBQ25DLG1DQUFtQztrREFHOUIsb0JBQW9CO2NBOUNoQyxRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2Qiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsaUNBQWlDO29CQUNqQyw0QkFBNEI7b0JBQzVCLDZCQUE2QjtvQkFDN0IsaUNBQWlDO29CQUNqQyxtQ0FBbUM7b0JBQ25DLG1DQUFtQztvQkFDbkMsaUNBQWlDO29CQUNqQyxtQ0FBbUM7aUJBQ3RDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLFVBQVU7b0JBQ1YsWUFBWTtpQkFDZjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AseUJBQXlCO29CQUN6QixnREFBZ0Q7aUJBQ25EO2dCQUNELGVBQWUsRUFBRTtvQkFDYiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsaUNBQWlDO29CQUNqQyxtQ0FBbUM7b0JBQ25DLG1DQUFtQztpQkFDdEM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLHVCQUF1QjtvQkFDdkIsOEJBQThCO29CQUM5Qiw2QkFBNkI7b0JBQzdCLGlDQUFpQztvQkFDakMsNEJBQTRCO29CQUM1Qiw2QkFBNkI7b0JBQzdCLGlDQUFpQztvQkFDakMsbUNBQW1DO29CQUNuQyxtQ0FBbUM7aUJBQ3RDO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ExMXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5pbXBvcnQge01hdGVUaW1lcGlja2VyQ29udGVudENvbXBvbmVudH0gZnJvbSAnLi90aW1lcGlja2VyLWNvbnRlbnQvdGltZXBpY2tlci1jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWF0ZVRpbWVwaWNrZXJEaWFsb2dCb2R5Q29tcG9uZW50fSBmcm9tICcuL3RpbWVwaWNrZXItZGlhbG9nLWJvZHkvdGltZXBpY2tlci1kaWFsb2ctYm9keS5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdGVUaW1lcGlja2VyRGlhbG9nRm9vdGVyQ29tcG9uZW50fSBmcm9tICcuL3RpbWVwaWNrZXItZGlhbG9nLWZvb3Rlci90aW1lcGlja2VyLWRpYWxvZy1mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXRlVGltZXBpY2tlckRpYWxvZ0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi90aW1lcGlja2VyLWRpYWxvZy1oZWFkZXIvdGltZXBpY2tlci1kaWFsb2ctaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWF0ZVRpbWVwaWNrZXJEaWFsb2dIb3VyQ29tcG9uZW50fSBmcm9tICcuL3RpbWVwaWNrZXItZGlhbG9nLWhvdXIvdGltZXBpY2tlci1kaWFsb2ctaG91ci5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdGVUaW1lcGlja2VyRGlhbG9nTWludXRlQ29tcG9uZW50fSBmcm9tICcuL3RpbWVwaWNrZXItZGlhbG9nLW1pbnV0ZS90aW1lcGlja2VyLWRpYWxvZy1taW51dGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXRlVGltZXBpY2tlckRpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi90aW1lcGlja2VyLWRpYWxvZy90aW1lcGlja2VyLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdGVUaW1lcGlja2VyRmFjZX0gZnJvbSAnLi90aW1lcGlja2VyLWZhY2UvdGltZXBpY2tlci1mYWNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TWF0ZVRpbWVwaWNrZXJJbnB1dERpcmVjdGl2ZX0gZnJvbSAnLi90aW1lcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TWF0ZVRpbWVwaWNrZXJJbnRsU2VydmljZX0gZnJvbSAnLi90aW1lcGlja2VyLWludGwuc2VydmljZSc7XHJcbmltcG9ydCB7TWF0ZVRpbWVwaWNrZXJUb2dnbGVDb21wb25lbnQsIE1hdGVUaW1lcGlja2VyVG9nZ2xlSWNvbkRpcmVjdGl2ZX0gZnJvbSAnLi90aW1lcGlja2VyLXRvZ2dsZS90aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge01BVEVfVElNRVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUiwgTWF0ZVRpbWVwaWNrZXJDb21wb25lbnR9IGZyb20gJy4vdGltZXBpY2tlci90aW1lcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTWF0ZVRpbWVwaWNrZXJGYWNlLFxyXG4gICAgICAgIE1hdGVUaW1lcGlja2VyQ29tcG9uZW50LFxyXG4gICAgICAgIE1hdGVUaW1lcGlja2VyQ29udGVudENvbXBvbmVudCxcclxuICAgICAgICBNYXRlVGltZXBpY2tlclRvZ2dsZUNvbXBvbmVudCxcclxuICAgICAgICBNYXRlVGltZXBpY2tlclRvZ2dsZUljb25EaXJlY3RpdmUsXHJcbiAgICAgICAgTWF0ZVRpbWVwaWNrZXJJbnB1dERpcmVjdGl2ZSxcclxuICAgICAgICBNYXRlVGltZXBpY2tlckRpYWxvZ0NvbXBvbmVudCxcclxuICAgICAgICBNYXRlVGltZXBpY2tlckRpYWxvZ0JvZHlDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZVRpbWVwaWNrZXJEaWFsb2dIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZVRpbWVwaWNrZXJEaWFsb2dGb290ZXJDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZVRpbWVwaWNrZXJEaWFsb2dIb3VyQ29tcG9uZW50LFxyXG4gICAgICAgIE1hdGVUaW1lcGlja2VyRGlhbG9nTWludXRlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICAgICAgQTExeU1vZHVsZSxcclxuICAgICAgICBQb3J0YWxNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBNYXRlVGltZXBpY2tlckludGxTZXJ2aWNlLFxyXG4gICAgICAgIE1BVEVfVElNRVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUlxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIE1hdGVUaW1lcGlja2VyQ29udGVudENvbXBvbmVudCxcclxuICAgICAgICBNYXRlVGltZXBpY2tlckRpYWxvZ0NvbXBvbmVudCxcclxuICAgICAgICBNYXRlVGltZXBpY2tlckRpYWxvZ0JvZHlDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZVRpbWVwaWNrZXJEaWFsb2dIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZVRpbWVwaWNrZXJEaWFsb2dGb290ZXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgTWF0ZVRpbWVwaWNrZXJDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZVRpbWVwaWNrZXJDb250ZW50Q29tcG9uZW50LFxyXG4gICAgICAgIE1hdGVUaW1lcGlja2VyVG9nZ2xlQ29tcG9uZW50LFxyXG4gICAgICAgIE1hdGVUaW1lcGlja2VyVG9nZ2xlSWNvbkRpcmVjdGl2ZSxcclxuICAgICAgICBNYXRlVGltZXBpY2tlcklucHV0RGlyZWN0aXZlLFxyXG4gICAgICAgIE1hdGVUaW1lcGlja2VyRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgICAgIE1hdGVUaW1lcGlja2VyRGlhbG9nQm9keUNvbXBvbmVudCxcclxuICAgICAgICBNYXRlVGltZXBpY2tlckRpYWxvZ0hlYWRlckNvbXBvbmVudCxcclxuICAgICAgICBNYXRlVGltZXBpY2tlckRpYWxvZ0Zvb3RlckNvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZVRpbWVwaWNrZXJNb2R1bGUge1xyXG59XHJcbiJdfQ==