import { Component, ViewChild, OnInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-informativo-dois',
  templateUrl: './informativo-dois.component.html',
  styleUrls: ['./informativo-dois.component.scss']
})
export class InformativoDoisComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit() {
  }

}
