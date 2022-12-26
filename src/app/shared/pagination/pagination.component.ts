import { Pagination } from './../Models/Pagination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: '',
})
//
export class PaginationComponent {
  firstPage = { page: 1 };
  totalCount = 0;
  pageNumber = 1;
  pager: any = {
    maxResultCount: 30,
    skipCount: 0
  };
  
  resetPagger() {
    
  }
}
