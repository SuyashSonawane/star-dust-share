import { Component, OnInit } from "@angular/core";
import {
  FirebaseUISignInSuccessWithAuthResult,
  FirebaseUISignInFailure,
  FirebaseuiAngularLibraryService
} from "firebaseui-angular";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    public auth: AuthService,
    private firebaseuiAngularLibraryService: FirebaseuiAngularLibraryService,
    private router: Router
  ) {
    // firebaseuiAngularLibraryService.firebaseUiInstance.disableAutoSignIn();
    // if (this.auth.user) this.router.navigate(["/profile"]);
  }
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
    if (signInSuccessData.authResult.additionalUserInfo.isNewUser) {
      this.router.navigate(["getting-started"]);
    } else this.router.navigate(["profile"]);
  }

  errorCallback(errorData: FirebaseUISignInFailure) {}
  ngOnInit() {
    setTimeout(() => {
      if (this.auth.currentUser()) this.router.navigate(["profile"]);
    }, 1000);
  }
}
