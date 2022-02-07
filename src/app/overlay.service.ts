import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, TemplateRef, ViewContainerRef } from '@angular/core';
import { OverlayComponent } from './overlay/overlay.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private _overlay: ComponentRef<OverlayComponent>;

  constructor(
    private _cfRes: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private _injector: Injector,
    @Inject(DOCUMENT) private _document: any
  ) { }

  attach(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    if (!this._overlay) {
      this._createOverlay();
    }

    const viewRef = viewContainerRef.createEmbeddedView(templateRef);

    // Core mechanics:
    // Should we create a host element for the rootNodes to attach to, then attach to overlay (similar to cdk)?
    // Should overlay component have an append method to append embeddedViews to (similar to cdk's OverlayContainer)?
    // Test change detection
    // Handle detaching views viewRef destroy or overlayRefs?

    viewRef.rootNodes.forEach(rootNode =>
      this._overlay.location.nativeElement.appendChild(rootNode));

    return viewRef;
  }

  detach(viewRef: EmbeddedViewRef<any>) {
    viewRef.destroy();
  }

  _createOverlay() {
    const componentRef = this._cfRes.resolveComponentFactory(OverlayComponent).create(this._injector);

    this._appRef.attachView(componentRef.hostView);
    this._document.body.appendChild(componentRef.location.nativeElement);
    this._overlay = componentRef;
  }

}
