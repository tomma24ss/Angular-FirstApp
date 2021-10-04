import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usershidden: Boolean = true;
  secretchathidden: Boolean = true;
  switchUsersHidden() {
    let prevbool = this.usershidden;
    if(this.usershidden == false) this.usershidden = true;
    if(this.usershidden == true && prevbool == true) this.usershidden = false;
    this.secretchathidden = true;
  }
  switchSecretChatHidden() {
    let prevbool = this.secretchathidden;
    if(this.secretchathidden == false) this.secretchathidden = true;
    if(this.secretchathidden == true && prevbool == true) this.secretchathidden = false;
    this.usershidden = true;
  }
}
