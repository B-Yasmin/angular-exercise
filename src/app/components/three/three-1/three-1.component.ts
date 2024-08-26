import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-three-1',
  standalone: true,
  imports: [],
  templateUrl: './three-1.component.html',
})
export class Three1Component {
  isLoadning = true;
}
