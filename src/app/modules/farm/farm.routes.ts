import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 二级页面组件
import { FarmComponent } from './farm.component';

import { ListComponent } from './pages/list/list.component';
import { FarmSetupComponent } from './pages/setup/farm-setup.component';

const routes: Routes = [
  {
    path: '',
    component: FarmComponent,
    children: [
      {
        path: 'setup',
        component: FarmSetupComponent,
        data: {
          title: 'Setup'
        }
      },    
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'List'
        }
      }           
    ]
  }
];

export const FarmRoutes: ModuleWithProviders = RouterModule.forChild(routes);