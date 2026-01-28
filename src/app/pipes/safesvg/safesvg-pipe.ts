import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safesvg',
})
export class SafesvgPipe implements PipeTransform {

  private sanitizer = inject(DomSanitizer);

  transform(svgCode: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgCode);
  }

}
