import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mongo-db-analyzer/mongo-db-analyzer.module').then(m => m.MongoDbAnalyzerModule)
  },
];
