import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VOSH';
  private _data: any[] = [];

  get data(): any[] {
    return this._data;
  }

  set data(data: any[]) {
    this._data = data;
  }
}
