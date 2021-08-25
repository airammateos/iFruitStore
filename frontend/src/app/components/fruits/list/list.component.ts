import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FruitData } from '../fruit.interface';
import { CoreService } from '../../../providers/api/core.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { SizeData } from '../size.interface';
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  modalOptions: NgbModalOptions;

  public fruits: FruitData[] = [];

  private sizes: SizeData[] = [];

  public filter: string = "";

  constructor(
    private _coreService: CoreService,
    private modalService: NgbModal
  ) {

    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop',
      centered: true
    }

    this.getFruitSizes();
  }

  ngOnInit(): void {
    this.onSearch();
  }

  private getFruitSizes() {
    this._coreService.get('/api/sizes').subscribe((response) => {
      this.sizes = response.data;
    }, (err) => {
      this.openWarning(err);
    });
  }

  onSearch(): void {
    this._coreService.get(`/api/fruits?filter=${this.filter}`).subscribe((response) => {
      this.fruits = response.data;
    }, (err) => {
      this.openWarning(err);
    });
  }

  onCreate(): void {
    const modalRef = this.modalService.open(
      EditDialogComponent,
      this.modalOptions
    );
    modalRef.componentInstance.activeModal = modalRef;
    modalRef.componentInstance.sizes = this.sizes;
    modalRef.closed.subscribe(fruit => {
      this.createFruit(fruit);
    });
  }

  private createFruit(fruit: FruitData | null): void {
    if(fruit) {
      this._coreService.post("/api/fruits/", fruit).subscribe((response) => {
        this.onSearch();
      }, (err) => {
        this.openWarning(err);
      });
    }
  }

  onEdit(id: number): void {
    const modalRef = this.modalService.open(
      EditDialogComponent,
      this.modalOptions
    );
    modalRef.componentInstance.activeModal = modalRef;
    Object.assign(modalRef.componentInstance.fruit, this.getFruit(id));
    modalRef.componentInstance.sizes = this.sizes;
    modalRef.closed.subscribe(fruit => {
      this.editFruit(fruit);
    });
  }

  private editFruit(fruit:FruitData | null): void {
    if(fruit) {
      this._coreService.put("/api/fruits/", fruit).subscribe((response) => {
        this.onSearch();
      }, (err) => {
        this.openWarning(err);
      });
    }
  }

  onDelete(id: number): void {
    const modalRef = this.modalService.open(
      DeleteDialogComponent,
      this.modalOptions
    );
    modalRef.componentInstance.activeModal = modalRef;
    modalRef.componentInstance.fruit = this.getFruit(id);
    modalRef.closed.subscribe(id => {
      this.deleteFruit(id);
    });
  }

  private deleteFruit(id: number): void {
    if (id > 0) {
      this._coreService.delete(`/api/fruits/${id}`).subscribe((response) => {
        this.onSearch();
      }, (err) => {
        this.openWarning(err);
      });
    }
  }

  private getFruit(id: number): FruitData | null {
    var result: FruitData[] = [];
    result = this.fruits.filter(fruit => fruit.id === id);
    if (result && result.length > 0) {
      return result[0];
    }
    return null;
  }

  private openWarning(message: string): void {
    const modalRef = this.modalService.open(
      WarningDialogComponent,
      this.modalOptions
    );
    modalRef.componentInstance.activeModal = modalRef;
    modalRef.componentInstance.message = message;
  } 
}
