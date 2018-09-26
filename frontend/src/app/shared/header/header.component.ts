import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTag;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

  }

  search() {
    window.location.href  = '/s/' + this.searchTag;
  }


  onKey(event) { this.searchTag = event.target.value; }



}
