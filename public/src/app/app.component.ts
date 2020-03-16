import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  tasks: any;
  task = "";
  selectedTask;

  ngOnInit(){
    
  }

  getTasksFromService(){
    console.log("Got our tasks!")
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log(data)
      this.tasks = data["task"]
      });
  }

  onDescriptionClick(id){
    console.log("Hi There")
    console.log("Got the task")
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      this.selectedTask = data["task"][0];
      console.log(this.selectedTask)
    })};

}
