import { ChangeDetectionStrategy, Component, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  viewRef: EmbeddedViewRef<any>;

  constructor(private _overlayService: OverlayService, private _viewContainerRef: ViewContainerRef) { }

  open() {
    this.viewRef = this._overlayService.attach(this.templateRef, this._viewContainerRef);
  }

  close() {
    this._overlayService.detach(this.viewRef);
  }
}
