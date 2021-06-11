import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable()
export class SocketService {
  constructor(private socket: Socket) {}

  public sendMessage(msg: string): void {
    this.socket.emit('new-message', msg);
  }
  public getMessage(): Observable<any> {
    return this.socket.fromEvent('sent');
  }
}
