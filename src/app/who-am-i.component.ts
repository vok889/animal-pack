// who-am-i.component.ts
import { Component, Input } from "@angular/core";
import { AnimalPackService } from "./animal-pack.service";

// one component contains three parts as selector is name to call, template is body of content and styles is css of content
@Component({ 
  selector: `who-am-i`,
  template: `
    <p>Who Am I ?</p>
    <div class="partial">
      <img src='{{ animalPackService.getPath(name) }}'>
    </div>
  `,
  styles: `
    .partial {
      height: 50px;
      overflow: hidden
    }
  `,
  standalone: true
})


export class WhoAmIComponent {
  @Input()
  name = 'cow'; // default

  constructor(public animalPackService: AnimalPackService) {}
}

