import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  @HostListener("click") open() {
    this.isOpen = true;
  }
  @HostListener("mouseleave") close() {
    this.isOpen = false;
  }
  @HostBinding("class.open") get opened() {
    return this.isOpen;
  }
  private isOpen = false;
}
