import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  user;
  constructor(private auth: AuthService, private router: Router) {}
  signout() {
    this.auth.signout().then(e => {
      this.router.navigate(["login"]);
    });
  }
  ngOnInit() {
    this.user = this.auth.currentUser();
    console.log(this.user);
  }
}
