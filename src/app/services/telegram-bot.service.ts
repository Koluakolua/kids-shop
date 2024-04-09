import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TelegramBotService {
  private gateway = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const url = `${this.gateway}/sendMessage`;
    const body = {
      text: message
    };
    return this.http.post(url, body);
  }
}
