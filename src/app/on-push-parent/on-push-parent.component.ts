import { Component } from '@angular/core';

@Component({
  selector: 'app-on-push-parent',
  templateUrl: './on-push-parent.component.html',
  styleUrls: ['./on-push-parent.component.scss']
})
export class OnPushParentComponent {
  parentObject= {
    objectName: 'parentObject'
  };

  titleParent = '';
}
