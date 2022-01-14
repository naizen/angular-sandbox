import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const INPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BlueInput),
  multi: true,
};

// TODO: Add input validators

@Component({
  selector: 'blue-input',
  templateUrl: './blue-input.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [INPUT_VALUE_ACCESSOR],
})
export class BlueInput implements ControlValueAccessor {
  @Input() type = 'text';

  @Input() value = '';

  @Input()
  @HostBinding('attr.disabled')
  @HostBinding('attr.aria-disabled')
  // @CoercedBoolean
  disabled = false;

  constructor(private _cdRef: ChangeDetectorRef) {}

  onChange = (_: any) => {};

  onTouched = () => {};

  registerOnChange(fn: (_: any) => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any) {
    this.value = value;

    //this._cdRef.markForCheck();
  }
}
