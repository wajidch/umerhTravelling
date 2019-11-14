import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
import {counddown100} from '../../../assets/comingsoon/countdown.js'
import {flipclock} from '../../../assets/comingsoon/vendor/countdowntime/flipclock.js'
import {flipcss} from '../../../assets/comingsoon/vendor/countdowntime/flipclock.min.js'

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var timer;

    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 35); //just for this demo today + 7 days
    
    timer = setInterval(function() {
      timeBetweenDates(compareDate);
    }, 1000);
    
    function timeBetweenDates(toDate) {
      var dateEntered = toDate;
      var now = new Date();
      var difference = dateEntered.getTime() - now.getTime();
    
      if (difference <= 0) {
    
        // Timer done
        clearInterval(timer);
      
      } else {
        
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
    
        hours %= 24;
        minutes %= 60;
        seconds %= 60;
    
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
      }
    }
  }

}
