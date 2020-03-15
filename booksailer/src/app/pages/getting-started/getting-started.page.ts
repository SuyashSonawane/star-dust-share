import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-getting-started",
  templateUrl: "./getting-started.page.html",
  styleUrls: ["./getting-started.page.scss"]
})
export class GettingStartedPage implements OnInit {
  user;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    setTimeout(() => {
      this.user = this.auth.currentUser();
      console.log(this.user);
    }, 1000);
  }
}
