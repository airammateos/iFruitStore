import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FruitData } from '../fruit.interface';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
  providers: [
    NgbActiveModal
  ]
})
export class DeleteDialogComponent implements OnInit {
  @Input() fruit: FruitData;

  constructor(
    public activeModal: NgbActiveModal
  ) { 
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
