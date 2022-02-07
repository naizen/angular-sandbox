import { AfterContentChecked, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabListComponent implements AfterContentChecked {
  hasTabs = false;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor(private _cdRef: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.hasTabs = this.tabs.length > 0;

    console.log('has tabs: ', this.hasTabs);

    this._cdRef.markForCheck();
  }

}
