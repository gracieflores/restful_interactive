import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Restful Task API';
  tasks = [];
  task: any;

  constructor(private _httpService: HttpService){}
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    //this.getTasksFromService();
  }
  getTasksFromService(){
    // let observable = this._httpService.getTasks();
    // observable.subscribe(data => {
    //   console.log("Got our tasks!", data)
    //   // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
    //   // This may be different for you, depending on how you set up your Task API.
    //   this.tasks = data['data'];
    // });
  }
  onButtonClick(): void { 
    //console.log(`Click event is working`);
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.tasks = data['data'];
    });
  }
  onButtonClickEvent(id) { 
    //console.log(id)
    let observable = this._httpService.getOneTask(id);
    observable.subscribe(data => {
      console.log("Got one task!", data)
      this.task = data;
      
      //console.log(`Click event is working with event: ${event}`);
  });
  }
}

// onButtonClickParams(num: Number, str: String): void { 
//   console.log(`Click event is working with num param: ${num} and str param: ${str}`);
// }
// onButtonClickParam(num: Number): void { 
//   console.log(`Click event is working with num param: ${num}`);
//   let observable = this._httpService.postToServer({data: num});
//     observable.subscribe(data => console.log("Got our data!", data));
// }
//export class AppComponent {
  //title = 'Restful Task';

  //constructor(private _httpService: HttpService){}
//}
