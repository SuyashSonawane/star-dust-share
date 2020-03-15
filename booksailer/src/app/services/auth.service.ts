import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public user = null;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListener);
    setTimeout(() => {
      // tslint:disable-next-line: curly
      if (this.angularFireAuth.auth.currentUser)
        this.router.navigate(["profile"]);
    }, 1000);
  }
  private firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {
      console.log("Logged in :)");
      this.user = response;
    } else {
      console.log("Logged out :(");
      this.user = null;
    }
  }
  public signout() {
    return this.angularFireAuth.auth.signOut();
  }
  public currentUser() {
    return this.angularFireAuth.auth.currentUser;
  }
}
