import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TelegramBotService {
  private gateway = 'https://oi5bo0kvbe.execute-api.eu-north-1.amazonaws.com/staging';

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const url = `${this.gateway}/sendMessage`;
    const body = {
      text: message
    };
    return this.http.post(url, body);
  }
}
