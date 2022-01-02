import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'frontend';
    loggedIn = false;

    constructor() {}

    ngOnInit() {
        if (document.cookie.indexOf('lenovoStarWarsLogin=') !== -1) {
            this.loggedIn = true;
        }
    }

    onLoginSuccess() {
        this.loggedIn = true;
    }

    onLogoutSuccess() {
        this.loggedIn = false;
    }
}
