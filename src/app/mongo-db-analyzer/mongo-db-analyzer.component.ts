import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MongoDbLogToQueriesService } from '../services';
@Component({
  selector: 'app-mongo-db-analyzer',
  templateUrl: './mongo-db-analyzer.component.html',
  styleUrl: './mongo-db-analyzer.component.scss'
})
export class MongoDbAnalyzerComponent {
  form: FormGroup;
  outputValue: string = '';

  constructor(private fb: FormBuilder, private mongoQueryAnalyzerService: MongoDbLogToQueriesService) {
    this.form = this.fb.group({
      inputValue: [''],
    });
  }

  onSubmit() {
    try {
      this.outputValue = this.mongoQueryAnalyzerService.ConvertLogToQuery(this.form.value.inputValue);
    } catch (error) {
      this.outputValue = '';
    }
  }
}
