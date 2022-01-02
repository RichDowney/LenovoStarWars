import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    // todo: define model for the item type
    @Input() item?: any;
    
    constructor() { }
}
