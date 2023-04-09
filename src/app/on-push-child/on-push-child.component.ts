import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-on-push-child',
  templateUrl: './on-push-child.component.html',
  styleUrls: ['./on-push-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChildComponent implements DoCheck {
  @Input() parentObject: any = {};
  @Input() titleParent = '';

  constructor(private changeDetectorRef: ChangeDetectorRef) {    
  }

  ngDoCheck(): void {
    // this.changeDetectorRef.markForCheck();
  }
}
