import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    console.log("menu: " + menu)
    console.log("icon: " + icon)
    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  }
  help() {
    console.log("Help")
  }
}
