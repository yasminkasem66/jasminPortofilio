import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, take, map } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  typedName = '';
  nameText = 'Yasmin';
  showCursor = true;


  typeName(): void {
    interval(350)
      .pipe(
        take(this.nameText.length),
        map(i => this.nameText.charAt(i))
      )
      .subscribe(char => {
        this.typedName += char;
        if (this.typedName.length === this.nameText.length) {
          this.showCursor = false;
        }
      });
  }
}
