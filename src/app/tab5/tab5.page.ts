// Kristofer McCormick 1803203 & Oleksandr Zakirov 1802341

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {


  userEmail: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private router: Router,
  ) {}

  ngOnInit() {

    if (this.authService.userDetails()) {
      this.userEmail = this.authService.userDetails().email;
    } else {
      this.navCtrl.navigateBack('');
    }
  }

  logout() {
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    });
  }
// our favourites menu navigation
// indian food
  goTikkaPage() {
    this.router.navigateByUrl('/tikka');
  }

  goVindalooPage() {
    this.router.navigateByUrl('/vindaloo');
  }

  goPaneerPage() {
    this.router.navigateByUrl('/paneer');
  }
// italian food
  goPizzaPage() {
    this.router.navigateByUrl('/pizza');
  }

  goSpaghettiPage() {
    this.router.navigateByUrl('/spaghetti');
  }

// French food
  goCousPage() {
    this.router.navigateByUrl('/cous');
  }

  goFtoastPage() {
    this.router.navigateByUrl('/ftoast');
  }
}
