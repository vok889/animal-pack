// amimal-pack.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalPackService {

  readonly PACK: string[] = [
    'bear', 'chick', 'dog', 'frog', 'gorilla', 'monkey', 'owl', 'penguin', 'rhino', 'walrus', 'zebra',
    'buffalo', 'cow', 'duck', 'giraffe', 'hippo', 'moose', 'panda', 'pig', 'sloth', 'whale',
    'chicken', 'crocodile', 'elephant', 'goat', 'horse', 'narwhal', 'parrot', 'rabbit', 'snake'
  ];

  prefix = 'packs'
  postfix = 'png'

  constructor() { }

  getPath(name: string): string {
    return `${this.prefix}/${name}.${this.postfix}`
  }

  randomN(n: number): string[] {
    return this.PACK.sort(() => 0.5 - Math.random()).slice(0, n);
  }

  randomOne(candidates: string[]): string {
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

}
