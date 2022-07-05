import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css'],
})
export class NotFoundPageComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = 'Nothing Found';
  @Input() resetLinkText: string = 'Try Again';
  @Input() resetLinkRoute: string = '/';

  constructor() {}

  ngOnInit(): void {}
}
