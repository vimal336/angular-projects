import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathsService } from './services/maths.service';
import { BookComponent } from './book/book.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoservService } from './services/todoserv.service';
import { MatCard } from '@angular/material/card';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddTodoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatFormField,
    MatCard,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MathsService,TodoservService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {

}
