import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  host: {
    class: 'overlay'
  }
})
export class OverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
