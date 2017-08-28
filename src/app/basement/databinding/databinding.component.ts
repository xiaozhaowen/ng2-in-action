import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bm-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  playerName = '勒布朗詹姆斯';
  classes = 'container error';
  girlImageUrl = 'assets/images/girl.jpg';
  isUnchanged = false;

  constructor() {
  }

  ngOnInit() {
  }

}
