import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';
@Component({
  selector: 'app-external-user-list',
  templateUrl: './external-user-list.component.html',
  styleUrls: ['./external-user-list.component.css']
})
export class ExternalUserListComponent implements OnInit {
  response:any;
  userList: any;
  constructor(private apiService: ApiServiceService,) {

   }
//getUserlist
  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    // this.spinner.show(); searchPageFilter
   // const data = {auth_code: this.authCode, userid:this.userId, filter: this.globalVariable.searchPageFilter, filterText: this.f.searchBox.value}
    this.apiService.getUserlist().
    subscribe(
        resultArray => {this.response = resultArray;
                        //if (this.response.status === '200') {
                            this.userList = this.response;
                            console.log(this.userList);
                        // } else {
                           
                        //   }
      },
      error => { if  (error) {
       // this.message = 'Some Server Error Occured!';
      }});
  }

}
