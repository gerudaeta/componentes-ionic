import {Component, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    @ViewChild('lista', {static: false}) lista: IonList;

    usuarios: Observable<any>;

    constructor(private dataService: DataService,
                private toastController: ToastController) { }

    ngOnInit() {
        this.usuarios = this.dataService.getUsers();
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        await toast.present();
    }

    favorite(user) {
        console.log('favorite', user);
        this.presentToast('Guardó en favoritos');
        this.lista.closeSlidingItems();
    }

    share(user) {
        console.log('share', user);
        this.presentToast('Compartido!');
        this.lista.closeSlidingItems();
    }

    unread(user) {
        console.log('unread', user);
        this.presentToast('Borrado!');
        this.lista.closeSlidingItems();
    }

}
