import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html",
  styleUrls: ["profilepage.component.scss"]
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  habilidades=["Javascript", "Angular", "Java Spring Boot", "MySQL", "Docker", "Git"]
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
