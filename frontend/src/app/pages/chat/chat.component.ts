import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';


const SOCKET_ENDPOINT = 'localhost:9000';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  socket: any;
  message :string ='';


  constructor() { }
  ngOnInit() {
  this.setupSocketConnection();
}

setupSocketConnection() {
  this.socket = io(SOCKET_ENDPOINT, {transports: ['websocket']});
  this.socket.on('message-broadcast', (data: string) => {
  if (data) {
   const element = document.createElement('li');
   element.innerHTML = data;
   element.style.background = 'white';
   element.style.padding =  '15px 30px';
   element.style.margin = '10px';
   const messageList = document.getElementById('message-list');
    if (messageList) {
      messageList.appendChild(element);
    }

   }
 });
}

Send() {
  this.socket.emit('message', this.message);
  const element = document.createElement('li');
  element.innerHTML = this.message;
  element.style.background = 'white';
  element.style.padding =  '15px 30px';
  element.style.margin = '10px';
  element.style.textAlign = 'right';
  const messageList = document.getElementById('message-list');
if (messageList) {
   messageList.appendChild(element);
}
  this.message = '';
}
}
