import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { QRCodeModule } from 'angular2-qrcode';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UiSwitchModule } from 'angular2-ui-switch';


import { FarmRoutes  } from './farm.routes';

import { FarmManagementService } from './services/farm.management.service';

import { FarmComponent } from './farm.component';

import { FarmSetupComponent } from './pages/setup/farm-setup.component';

import { ListComponent } from './pages/list/list.component';

let page = [

  FarmComponent,

  FarmSetupComponent,

  ListComponent


];


import {SliderModule,SelectButtonModule,InputSwitchModule,DataTableModule,SharedModule,SplitButtonModule,DataListModule,TabViewModule,DragDropModule,PanelModule,MessagesModule,GrowlModule,StepsModule,DropdownModule,CalendarModule,ConfirmDialogModule,
ConfirmationService,OverlayPanelModule,AutoCompleteModule,DialogModule,ProgressBarModule,InplaceModule,TooltipModule,
FileUploadModule,CheckboxModule} from 'primeng/primeng';

import { MitLayoutModule } from '../../widgets/mit-layout/mit-layout.module';
import { MitDataTableModule } from '../../widgets/mit-data-table/mit-data-table.module';

let widgets = [
  MitLayoutModule,
  MitDataTableModule
];

import { FarmMapComponent } from './shared/FarmMapComponent';
let shared = [
  FarmMapComponent
]


@NgModule({
  imports: [
    FarmRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // QRCodeModule,
    ChartsModule,  
    UiSwitchModule,  

    SliderModule,SelectButtonModule,InputSwitchModule,DataListModule,SplitButtonModule,TabViewModule,
    DragDropModule,PanelModule,MessagesModule,GrowlModule,DataTableModule,StepsModule,DropdownModule,ConfirmDialogModule,FileUploadModule, CheckboxModule,OverlayPanelModule,AutoCompleteModule,DialogModule,ProgressBarModule,InplaceModule,CalendarModule,TooltipModule,
    ...widgets  
   ],
  declarations: [
    ...page,
    ...shared
  ],
  providers: [FarmManagementService,
  ConfirmationService]

})
export class FarmModule { }
