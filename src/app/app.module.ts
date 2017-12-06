import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserSelectorComponent } from './user/user-selector/user-selector.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { SignatureComponent } from './signature/signature.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        UserPreviewComponent,
        UserSelectorComponent,
        UserListComponent,
        SignatureComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AppModule {
}
