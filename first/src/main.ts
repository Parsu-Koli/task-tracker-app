import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers:[provideHttpClient()]
})
  // .catch((err) => console.error(err));
