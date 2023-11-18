import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent {
    isCollapsed = true;
    constructor(private router: Router) {}

    public goToProfile(){
      this.router.navigate(["./profile"]);
    }

    public goToContact(){
      this.router.navigate(["./contact"]);
    }

    public goToHome(){
      this.router.navigate(["./home"]);
    }
}
