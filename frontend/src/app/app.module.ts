import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/fruits/list/list.component';
import { Page404Component } from './components/page404/page404.component';
import { DeleteDialogComponent } from './components/fruits/delete-dialog/delete-dialog.component';

import { CoreService } from './providers/api/core.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditDialogComponent } from './components/fruits/edit-dialog/edit-dialog.component';
import { WarningDialogComponent } from './components/fruits/warning-dialog/warning-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    Page404Component,
    DeleteDialogComponent,
    EditDialogComponent,
    WarningDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  providers: [
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
