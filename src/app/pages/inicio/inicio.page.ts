import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Menu } from '../../interfaces/menu';
import { DataService } from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    componentes: Observable<Menu[]>;

    constructor(private menuController: MenuController,
                private dataService: DataService) { }

    ngOnInit() {
        this.componentes = this.dataService.getMenuOpts();
    }

    toggleMenu() {
        this.menuController.toggle();
    }

}

