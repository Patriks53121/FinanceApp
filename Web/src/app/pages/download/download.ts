import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-download',
  styleUrl: './download.css',
  templateUrl: './download.html',
})
export class Download {
  downloadSource() {
    window.location.href = 'https://github.com/Patriks53121/FinanceApp';
  }
}
