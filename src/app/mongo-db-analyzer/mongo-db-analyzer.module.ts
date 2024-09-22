import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MongoDbAnalyzerRouteModule } from './mongo-db-analyzer.routes';
import { MongoDbAnalyzerComponent } from './mongo-db-analyzer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@NgModule({
  declarations: [MongoDbAnalyzerComponent],
  imports: [
    CommonModule,
     MongoDbAnalyzerRouteModule,
     ReactiveFormsModule,
     HighlightAuto, HighlightLineNumbers
  ]
})
export class MongoDbAnalyzerModule { }
