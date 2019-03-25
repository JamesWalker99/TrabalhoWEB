import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map, take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-informativo',
  templateUrl: './informativo.component.html',
  styleUrls: ['./informativo.component.scss']
})
export class InformativoComponent implements OnInit {

  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{
    letter: 'P',
    names: ['Paraná']
  },
  {
    letter: 'S',
    names: ['Santa Catarina']
  },
  {
    letter: 'R',
    names: ['Rio Grande do Sul']
  },
 ];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder,
              private ngZone: NgZone) {}

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  
  triggerResize() {
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

}