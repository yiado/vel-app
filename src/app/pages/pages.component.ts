import { Component, OnInit } from '@angular/core';
import { ServicesModule } from '../services/services.module';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor( private authService: ServicesModule ) {}

  ngOnInit() {
  }

}
