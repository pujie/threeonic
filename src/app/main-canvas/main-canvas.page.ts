import { Component, OnInit } from '@angular/core';
import { ThreeService } from '../three.service';

@Component({
  selector: 'app-main-canvas',
  templateUrl: './main-canvas.page.html',
  styleUrls: ['./main-canvas.page.scss'],
})
export class MainCanvasPage implements OnInit {

  constructor(private three: ThreeService) { }

  ngOnInit() {
  }

}
