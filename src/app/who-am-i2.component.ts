// who-am-i.component.ts
import { Component, NgModule } from "@angular/core";

// one component contains three parts as selector is name to call, template is body of content and styles is css of content
@Component({ 
  selector: `who-am-i2`,
  template: `
    <p>Who Am I ?</p>
    <div class="partial">
      <img src='/packs/panda.png'>
    </div>
  `,
  styles: `
    .partial {
      height: 50px;
      overflow: hidden
    }
  `
})


export class WhoAmI2Component {

}

@NgModule({
  declarations: [WhoAmI2Component],
  exports: [WhoAmI2Component]
})
export class AnimalPack2Module {

}