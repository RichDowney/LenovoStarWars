import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css']
})
export class CollectionComponent {

    @Output() onLogoutSuccess = new EventEmitter<any>();
    collectionItems = [];

    constructor(private dataService: DataService) { }
    
    getCollection() {
        this.dataService.getCollection().subscribe(
            (data: any) => {
                this.collectionItems = data.body.content;
            },
            (response: HttpErrorResponse) => {
                // handle error
            });
    }

    logout() {
        this.dataService.logout().subscribe(
            (data: any) => {
                this.onLogoutSuccess.emit();
            }
        );
    }
}
