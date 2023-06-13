import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  //variable to store incoming data
  @Input() childAcno: String | undefined

  //event creation for deletion
  
  @Output() onCancel = new EventEmitter()


  @Output() onDelete = new EventEmitter()


  cancelDelete() {
    this.onCancel.emit()
  }


  deleteConf() {
    this.onDelete.emit(this.childAcno)
  }

  

}

