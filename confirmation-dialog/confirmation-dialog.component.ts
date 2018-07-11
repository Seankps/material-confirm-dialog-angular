import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})

export class ConfirmationDialogComponent implements OnInit {
  @Input() opened;
  @Input() heading: string;
  @Input() message: string;
  @Input() confirmTxt: string;
  @Input() cancelTxt: string;
  @Input() isRounded: boolean;

  @Output() confirmed: EventEmitter<any> = new EventEmitter<any>();
  @Output() closed: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.opened = this.opened;
    this.heading = this.heading ? this.heading : "Are you sure?";
    this.message = this.message ? this.message : "Click Confirm to proceed, or Cancel to close this dialog";
    this.confirmTxt = this.confirmTxt ? this.confirmTxt : "Confirm";
    this.cancelTxt = this.cancelTxt ? this.cancelTxt : "Cancel";
  }

  hasConfirmed(){
    this.confirmed.emit(true);
  }

  closeDialog() {
    this.closed.emit(true);
  }

}
