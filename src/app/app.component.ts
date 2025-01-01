import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MAHALLE ADİSYON.ng';
  data: any;
  public isButtonClicked1: boolean = false;
  public isButtonClicked2: boolean = false;
  public isButtonClicked3: boolean = false;
  public isButtonClicked4: boolean = false;

  toggleDivContent1() {
    this.isButtonClicked1 = !this.isButtonClicked1;
    this.isButtonClicked2 = false;
    this.isButtonClicked3 = false;
    this.isButtonClicked4 = false;
  }

  toggleDivContent2() {
    this.isButtonClicked2 = !this.isButtonClicked2;
    this.isButtonClicked1 = false;
    this.isButtonClicked3 = false;
    this.isButtonClicked4 = false;
  }

  toggleDivContent3() {
    this.isButtonClicked3 = !this.isButtonClicked3;
    this.isButtonClicked1 = false;
    this.isButtonClicked2 = false;
    this.isButtonClicked4 = false;
  }
  toggleDivContent4() {
    this.isButtonClicked4 = !this.isButtonClicked4;
    this.isButtonClicked3 = false;
    this.isButtonClicked1 = false;
    this.isButtonClicked2 = false;
  }

  constructor() {


  }
  openDialog() {
   /* this.dialog.open(PlannedFormComponent);*/
  }

  ngOnInit(): void {

  }
}
