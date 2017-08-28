import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../entities/hero';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
