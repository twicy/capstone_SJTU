import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarHeader: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarHeader.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
