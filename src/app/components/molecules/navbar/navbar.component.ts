import { Component } from '@angular/core';
import { MenuElement } from '../../../interfaces/menu';
import { Router } from '@angular/router';

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
    { title: 'Contacto', route: '/Contacto' },

  ];

  isMenuOpen: boolean = false;
  constructor(private router: Router) { }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
  closeMenu(): void {

    this.isMenuOpen = false;
  }
}
