import { Component,EventEmitter, inject, Input, Output } from '@angular/core';
import { AnimalPackService } from '../animal-pack.service';

@Component({
  selector: 'app-i-choose-you',
  standalone: true,
  imports: [],
  templateUrl: './i-choose-you.component.html',
  styleUrl: './i-choose-you.component.css'
})
export class IChooseYouComponent {
  @Input()
  names: string[] = ['chick', 'hippo', 'monkey']

  @Output()
  choose = new EventEmitter<string>();

  animalPackService = inject(AnimalPackService)

  selected = ''

  onSelect(name: string): void {
    this.selected = name;
    this.choose.emit(this.selected)
  }
}
