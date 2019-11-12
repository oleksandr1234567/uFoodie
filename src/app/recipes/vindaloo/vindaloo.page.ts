// Kristofer McCormick 1803203 & Oleksandr Zakirov 1802341

import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vindaloo',
  templateUrl: './vindaloo.page.html',
  styleUrls: ['./vindaloo.page.scss'],
})
export class VindalooPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController

  ) {}
// this section sets the defaults for the timer
  percent:number = 0;
  radius:number = 100;
// this sets a default time value for 5 minutes as it is a conveniently small number,
// as not every recipe will need 5 hours for example
  fullTime: any = '00:05:00';

  timer: any = false;
  progress: any = 0;
  hours: number = 0;
  minutes: number = 5;
  seconds: any = 0;

  elapsed: any = {
    h: '00',
    m: '00',
    s: '00',
  };

  overallTimer: any = false;



  userEmail: string;



  startTime() {
// stops timer if pressed again but starts again if no stop button
    if (this.timer) {
      clearInterval(this.timer);
    }

// this will adjust the percentage of the timer and reset it when needs be
    this.timer = false;
    this.percent = 0;
    this.progress = 0;
// this will split the showed time wil colons
    let timeSplit = this.fullTime.split(':');
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];
// states the values of the minutes, hours and seconds and stores them as an integer
    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);
// this section adds to the progress percentage of the spinning wheel
    this.timer = setInterval(async () => {

  // adds an action to stop the circle timer when the radius has reached the 100%
  // from the original input, the clock will continue to count for the convenience of the user
  // just in case they need an extra 2 minutes for example
  // Alert will now be displayed no matter where the user is in the app
        if (this.percent === this.radius) {
          clearInterval(this.timer);
          const alert = await this.alertCtrl.create({
            header: 'Timer elapsed',
            message: 'Your food is ready!',
            buttons: ['Ok']
          });
          await alert.present();

        }
        if (!this.overallTimer) {
          this.progressTimer();
        }


        this.percent = Math.floor((this.progress / totalSeconds) * 100);
        this.progress++;
      }, 1000);
    }

  progressTimer() {
    let countDownDate = new Date();

    this.overallTimer = setInterval(() => {
      let now = new Date().getTime();
      let distance = now - countDownDate.getTime();

      this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);

      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);
    }, 1000);
  }
// for leading zeroes
  pad(num, size) {
    let s = num + '';
    while (s.length < size) { s = '0' + s; }
    return s;
  }
// allows the timer to be stopped by a button in html page
  StopTime() {
    clearInterval(this.timer);
    clearInterval(this.overallTimer);

    this.overallTimer = false;
    this.timer = false;
    this.percent = 0;
    this.progress = 0;
    this.elapsed = {
      h: '00',
      m: '00',
      s: '00'
    };

  }


  ngOnInit() {
  }

}
