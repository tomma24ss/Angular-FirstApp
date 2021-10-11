import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usershidden: Boolean = true;
  secretchathidden: Boolean = true;
  wiskformuleshidden: Boolean = false;
  switchUsersHidden() {
    let prevbool = this.usershidden;
    if(this.usershidden == false) this.usershidden = true;
    if(this.usershidden == true && prevbool == true) this.usershidden = false;
    this.secretchathidden = true;
    this.wiskformuleshidden = true;
  }
  switchSecretChatHidden() {
    let prevbool = this.secretchathidden;
    if(this.secretchathidden == false) this.secretchathidden = true;
    if(this.secretchathidden == true && prevbool == true) this.secretchathidden = false;
    this.usershidden = true;
    this.wiskformuleshidden = true;
  }
  switchWiskFormulesHidden() {
    let prevbool = this.wiskformuleshidden;
    if(this.wiskformuleshidden == false) this.wiskformuleshidden = true;
    if(this.wiskformuleshidden == true && prevbool == true) this.wiskformuleshidden = false;
    this.usershidden = true;
    this.secretchathidden = true;
  }
}
