import { Component, OnInit } from '@angular/core';

interface Componentes {
  icono: string,
  name: string,
  path: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componentes[] = [

    {
      icono: 'clipboard',
      name: 'Action Sheet',
      path: '/action-sheet',
    },

    {
      icono: 'alert-circle',
      name: 'Alert',
      path: '/alert',
    },
    
    {
      icono: 'logo-javascript',
      name: 'Avatar',
      path: '/avatar',
    },

    {
      icono: 'radio-button-on',
      name: 'Buttons',
      path: '/buttons',
    },

    {
      icono: 'id-card',
      name: 'Cards',
      path: '/cards',
    },

    {
      icono: 'checkmark-circle',
      name: 'Checks',
      path: '/checks',
    },

    {
      icono: 'calendar',
      name: 'Date Time',
      path: '/datetime',
    },

    {
      icono: 'grid-outline',
      name: 'Grid',
      path: '/grid',
    },
  
    {
      icono: 'bookmarks',
      name: 'Fab',
      path: '/fab',
    },

    {
      icono: 'infinite',
      name: 'Infinite-Scroll',
      path: '/infinite-scroll',
    },

    {
      icono: 'information-circle',
      name: 'Input Forms',
      path: '/inputforms',
    },

    {
      icono: 'list-outline',
      name: 'List',
      path: '/list',
    },

    {
      icono: 'list-circle',
      name: 'List Sliding',
      path: '/list-sliding',
    },

    {
      icono: 'list',
      name: 'List Reorder',
      path: '/list-reorder',
    },

    {
      icono: 'reload-circle',
      name: 'Loading',
      path: '/loading',
    },
    
    {
      icono: 'invert-mode',
      name: 'Modal',
      path: '/modal',
    },

    {
      icono: 'invert-mode',
      name: 'Modal Content',
      path: '/modal-content',
    },

    {
      icono: 'podium',
      name: 'Popover',
      path: '/popover',
    },

    {
      icono: 'code-working',
      name: 'Progress Bar',
      path: '/progressbar',
    },

    {
      icono: 'refresh-circle',
      name: 'Refresher',
      path: '/refresher',
    },

    {
      icono: 'search-circle',
      name: 'Search',
      path: '/search',
    },

    {
      icono: 'layers',
      name: 'Segment',
      path: '/segment',
    },

    {
      icono: 'albums',
      name: 'Slides',
      path: '/slides',
    },

    {
      icono: 'tablet-portrait',
      name: 'Tabs',
      path: '/tabs',
    },

    {
      icono: 'laptop',
      name: 'Toast',
      path: '/toast',
    },


  ]

  constructor() { }

  ngOnInit() {
  }

}
