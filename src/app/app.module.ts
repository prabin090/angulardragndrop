import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule }    from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
