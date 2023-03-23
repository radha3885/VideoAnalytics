import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'resumes';
  socketr:any;
 constructor(){

 }

 ngOnInit(): void {
     this.sockets();
 }

 public stopWs = () => {
  this.socketr.close();
 }

 public sockets = () => {
  const socket = new WebSocket('ws://localhost:3000','echo-protocol');
  this.socketr = socket;
  // Connection opened
  socket.addEventListener('open', (event) => {
      socket.send('Hello Server!');
  });
  
  // Listen for messages
  socket.addEventListener('message', (event) => {
      console.log('Message from server ', event.data);
  });

  socket.onclose = () => {
    console.log("closed");
  };

 }

}
