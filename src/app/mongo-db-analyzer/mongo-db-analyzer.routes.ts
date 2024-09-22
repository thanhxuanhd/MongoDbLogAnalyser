import { Routes, RouterModule } from '@angular/router';
import { MongoDbAnalyzerComponent } from './mongo-db-analyzer.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mdb-log-to-query' },
  { path: 'mdb-log-to-query', component: MongoDbAnalyzerComponent },
];
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class MongoDbAnalyzerRouteModule { }
