import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      inputValue: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.form.valid){
      try {
        let error = '';
        [this.outputValue, error] = this.mongoQueryAnalyzerService.convertLogToQuery(this.form.value.inputValue);

        if(error && error.length > 0){
          this.form.get('inputValue')?.setErrors({error: error});
        }
      } catch (error) {
        this.outputValue = '';
      }
    }
  }
}
