import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-on-push-child',
  templateUrl: './on-push-child.component.html',
  styleUrls: ['./on-push-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChildComponent {
  @Input() parentObject: any = {};
}
