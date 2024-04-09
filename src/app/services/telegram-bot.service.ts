import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TelegramBotService {
  private apiUrl = 'https://api.telegram.org/bot';
  private botToken = '6454915833:AAHqV2kvybFz9vVWoShBtwUxaL8sKbD9zRQ'; // Replace with your Telegram bot token
  private chatId = '-4182836035';

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const url = `${this.apiUrl}${this.botToken}/sendMessage`;
    const body = {
      chat_id: this.chatId,
      text: message
    };
    return this.http.post(url, body);
  }
}
