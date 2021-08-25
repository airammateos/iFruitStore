import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FruitData } from '../fruit.interface';
import { SizeData } from '../size.interface';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
  providers: [
    NgbActiveModal
  ]
})
export class EditDialogComponent implements OnInit {
  @Input() fruit: FruitData;
  @Input() sizes: SizeData[];

  constructor(
    public activeModal: NgbActiveModal
  ) { 
    this.sizes = [];
    this.fruit = {
      id: 0,
      name: "",
      size_id: 0,
      size_desc: "",
      color: ""
    }
  }

  ngOnInit(): void {
  }

}
