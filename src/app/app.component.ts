import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

/**
 * t(OK) // should be detected as a marker
 * combineLastest(ERR) // should NOT be detected as a marker
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'transloco-key-manager-bug-repro-marker-comment-prefixed';
}
