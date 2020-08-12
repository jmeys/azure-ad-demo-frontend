import {Component} from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
