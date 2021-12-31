import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.scss']
})
export class BoardDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movedlist() {
    location.href='http://localhost:4200/boardList'
  }
}
