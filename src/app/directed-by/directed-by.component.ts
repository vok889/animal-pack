// directed-by.component.ts
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directed-by',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './directed-by.component.html',
  styleUrl: './directed-by.component.css'
})
export class DirectedByComponent {
  @Input()
  director = 'Robert B. Weide'
}
