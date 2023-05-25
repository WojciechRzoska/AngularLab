import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './MyComponents/main/main.component';
import { MyMaterialModule } from './mymaterial.module';

import { FormComponent } from './MyComponents/main/form/form.component';
import { PokemonComponent } from './MyComponents/main/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './MyComponents/main/task-list/task-list.component';
import { TaskItemComponent } from './MyComponents/main/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    PokemonComponent,
    TaskListComponent,
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
