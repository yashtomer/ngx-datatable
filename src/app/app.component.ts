import { ServerService } from './server.service';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'ngx-datatable';
  loading: boolean = false;
  rows: any[];
  columns;
  pageNumber;
  size;
  totalElements;
  page;
  count;
  offset;
  pagination = 0;
  temp = [];
  
  constructor(private _services: ServerService) {
    
    this.pageNumber = 0;
    this.size = 20;

    this.columns = [ 
      { prop: 'id' }, 
      { prop: 'first_name' },  
      { prop: 'last_name' },
      { prop: 'avatar' },
    ];

  }


  ngOnInit() {
   this.setPage({ offset: 0 });
  }

  setPage(pageInfo){
    console.log('pageInfo',pageInfo);

    this.offset = pageInfo.offset;
    this.pagination = pageInfo.offset + 1;

    let path = 'https://reqres.in/api/users?page='+this.pagination;
    this.pageNumber = pageInfo.offset;
    this._services.getServerData(path).subscribe((res: any) => {
      
      console.log('res',res);

      this.count = res.total;
      this.page = res.data;
      this.rows = res.data;
      this.temp = res.data;

       
      console.log('this.rows',this.rows);
    });
  }

  onSort(event) {
    // event was triggered, start sort sequence
    console.log('Sort Event', event);
    this.loading = true;
    let path = 'https://reqres.in/api/users?page='+this.pagination;
    // emulate a server request with a timeout
    setTimeout(() => {
      this._services.getServerData(path).subscribe((res: any) => {
      
        console.log('res',res);
  
        this.count = res.total;
        this.page = res.data;
        this.rows = res.data;
         
        console.log('this.rows',this.rows);
      });

      this.loading = false;
    }, 1000);
  }

  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();

  //   // filter our data
  //   const temp = this.temp.filter(function(d) {
  //     return d.name.toLowerCase().indexOf(val) !== -1 || !val;
  //   });

  //   // update the rows
  //   this.rows = temp;
  //   // Whenever the filter changes, always go back to the first page
  //  // this.table.offset = 0;
  // }

}

