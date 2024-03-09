import { Component } from '@angular/core';
import { MenuElement } from '../../../interfaces/menu';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuElements: MenuElement[] = [
    // { title: 'admin', route: '/Administrador' },
    { title: 'Inicio', route: '/Inicio' },
    { title: 'Productos', route: '/Productos' },

  ];
  isMenuOpen: boolean = false;
  isHomePage: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = (event.url === '/Inicio');
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
  closeMenu(): void {

    this.isMenuOpen = false;
  }
}
