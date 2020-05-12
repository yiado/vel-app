import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
    propiedad: 'Campus 1',
    direccion: 'Blanco Encalada 2020',
    icono: 'fas fa-university',
    url: '/dashboard',
    submenu: [
      {
        subpropiedad: 'Propiedad 1',
        url: '/dashboard'
      },
      {
        subpropiedad: 'Propiedad 2',
        url: '/dashboard'
      },
      {
        subpropiedad: 'Propiedad 3',
        url: '/dashboard'
      }
    ]
  },
  {
    propiedad: 'Campus 2',
    direccion: 'Carmen 324',
    icono: 'fas fa-university',
    url: '/login',
    submenu: [
      {
        subpropiedad: 'Propiedad 1',
        url: '/login'
      }
    ]
  }
];

  constructor() { }
}
