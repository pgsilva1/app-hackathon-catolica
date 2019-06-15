import { Component, OnInit } from '@angular/core';

@Component({
    selector   : 'app-login',
    templateUrl: './login.page.html',
    styleUrls  : ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    cpf: number;
    password: string;

    constructor() { }

    ngOnInit() {
    }

    handleSubmit() {
        console.log(this.cpf, this.password);
        // this.router.navigateByUrl('/tabs')
    }

}
