import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'programming',
        loadChildren: () => import('../progression/progression.module').then(m => m.ProgressionPageModule)
      },
      {
        path: 'arts',
        loadChildren: () => import('../progression/progression.module').then(m => m.ProgressionPageModule)
      },
      {
        path: 'freelancing',
        loadChildren: () => import('../progression/progression.module').then(m => m.ProgressionPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/programming',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/programming',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
