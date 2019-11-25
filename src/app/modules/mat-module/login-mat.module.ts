import { NgModule } from '@angular/core';

import {
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ]
})
export class LoginMatModule {  }
