import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Botões', url: '/botao', icon: 'construct' },
    { title: 'Alerta', url: '/alert', icon: 'alert-circle' },
    { title: 'Action Sheet', url: '/actionsheet', icon: 'alert' },
    { title: 'Badge', url: '/badge', icon: 'list' },
    { title: 'Card', url: '/card', icon: 'newspaper' },
    { title: 'Checkbox', url: '/checkbox', icon: 'checkbox' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
