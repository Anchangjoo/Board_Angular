import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-create',
  templateUrl: './board-create.component.html',
  styleUrls: ['./board-create.component.scss']
})
export class BoardCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  movelist() {
    location.href='http://localhost:4200/boardList'
  }
}
