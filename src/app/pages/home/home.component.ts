import { environment } from 'src/environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AngularButtonLoaderService } from 'angular-button-loader';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
declare var jQuery: any;
declare var $: any;
import Swal from 'sweetalert2'
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookForm: FormGroup;
  submitted: boolean;
  productlist: any;
  reviewlist: any;

  imgUrl=environment.imgUrl
  videoView: any={
    file:'',
    url:''
  };
  images=[];
  carouselOptions = {
    margin: 45,
    stagePadding: 60,
   dots:true,
  autoplay:true,
  navText:'',
  center:true,
  startPosition: 3,
  loop:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        
      },
      600: {
        items: 1,
        
      },
      1000: {
        items: 5,
        

        loop: true
      },
      1500: {
        items: 5,
        

        loop: true
      }
    }
  }
  
  carouselFeedback = {
    margin: 45,
    
   
  autoplay:true,
  navText:'',
  dots:true,
  center:true,
  startPosition: 3,
  loop:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
            },
      600: {
        items: 1,
            },
      1000: {
        items: 1,
      
        loop: true
      },
      1500: {
        items: 1,
      
        loop: true
      }
    }
  }
  carouselClientImg = {
    margin: 45,
   
  autoplay:true,
  navText:'',
  dots:true,
  center:true,
  startPosition: 3,
  loop:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        
      },
      600: {
        items: 1,
        
      },
      1000: {
        items: 3,
       
        loop: true
      },
      1500: {
        items: 3,
       
        loop: true
      }
    }
  }
  constructor(private apiservice:apiService,
    private spinner:NgxSpinnerService,
    private router:Router,
    private loadingBar:LoadingBarService,
    private loaderbutton:AngularButtonLoaderService,
    private cdr: ChangeDetectorRef,) { }

  ngOnInit() {
  //   $('.carousel').carousel({ pause: "false" });
  //   $("#nav ul li a[href^='#']").on('click', function(e) {
    
  //     // prevent default anchor click behavior
  //     e.preventDefault();
   
  //     // store hash
  //     var hash = this.hash;
   
  //     // animate
  //     $('html, body').animate({
  //         scrollTop: $(hash).offset().top
  //       }, 1000, function(){
   
  //         // when done, add hash to url
  //         // (default click behaviour)
  //         window.location.hash = hash;
  //       });
   
  //  });
   
  //  $("#nav div div a[href^='#']").on('click', function(e) {
   
  //     // prevent default anchor click behavior
  //     e.preventDefault();
   
  //     // store hash
  //     var hash = this.hash;
   
  //     // animate
  //     $('html, body').animate({
  //         scrollTop: $(hash).offset().top
  //       }, 1000, function(){
   
  //         // when done, add hash to url
  //         // (default click behaviour)
  //         window.location.hash = hash;
  //       });
   
  //  });
 
   
    this.bookForm= new FormGroup({
      name:new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,
      Validators.email]),
      phone: new FormControl('', [Validators.required,
        Validators.pattern('^((\\+92)|(0092))-{0,1}\\d{3}-{0,1}\\d{7}$|^\\d{11}$|^\\d{4}-\\d{7}$')]),
        // days: new FormControl('', [Validators.required,
        //   Validators.email]),
     

      message: new FormControl('', [Validators.required]),
      

    })

  
  }
  trackByFn(index, item) {    
    return item.id; 
 }
  ngAfterViewInit() {
    this.getslider();
  }
  getslider(){
    
    (function ($) {
      'use strict';
  
    
  
      // :: 2.0 Slick Active Code
      if ($.fn.slick) {
          $('.slider-for').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              arrows: false,
              fade: true,
              asNavFor: '.slider-nav'
          });
          $('.slider-nav').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              speed: 500,
              asNavFor: '.slider-for',
              dots: true,
              centerMode: true,
              focusOnSelect: true,
              slide: 'div',
              autoplay: true,
             
              centerPadding: '30px',
              mobileFirst: true,
              prevArrow: '<i class="fa fa-angle-left"></i>',
              nextArrow: '<i class="fa fa-angle-right"></i>'
          });
      }
  
      // :: 3.0 Footer Reveal Active Code
      if ($.fn.footerReveal) {
          $('footer').footerReveal({
              shadow: true,
              shadowOpacity: 0.3,
              zIndex: -101
          });
      }
  
      // :: 4.0 ScrollUp Active Code
      if ($.fn.scrollUp) {
          $.scrollUp({
              scrollSpeed: 1500,
              scrollText: '<i class="fa fa-angle-up"></i>'
          });
      }
  
      // :: 5.0 CounterUp Active Code
      if ($.fn.counterUp) {
          $('.counter').counterUp({
              delay: 10,
              time: 2000
          });
      }
  
      // :: 6.0 onePageNav Active Code
      if ($.fn.onePageNav) {
          $('#nav').onePageNav({
              currentClass: 'active',
              scrollSpeed: 2000,
              easing: 'easeOutQuad'
          });
      }
  
      // :: 7.0 Magnific-popup Video Active Code
      if ($.fn.magnificPopup) {
          $('.video_btn').magnificPopup({
              disableOn: 0,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: true,
              fixedContentPos: false
          });
      }
  
      $('a[href="#"]').click(function ($) {
          $.preventDefault()
      });
  
      var $window = $(window);
  
     
  
      // :: 8.0 Sticky Active Code
      $window.on('scroll', function () {
          if ($window.scrollTop() > 48) {
              $('.header_area').addClass('sticky slideInDown');
          } else {
              $('.header_area').removeClass('sticky slideInDown');
          }
      });
  
      // :: 9.0 Preloader Active code
      $window.on('load', function () {
          $('#preloader').fadeOut('slow', function () {
              $(this).remove();
          });
      });
  
  })(jQuery);
  }
  booknow(val){
    console.log("val",val)
    this.submitted=true;
    //this.spinner.show();
    if(this.bookForm.valid){
      $("#bookRequest").css("cursor", 'not-allowed');
    $("#bookRequest").attr("disabled", true);
      this.loadingBar.start();
      this.loaderbutton.displayLoader();
     
      this.submitted=false;
    
    this.loadingBar.start();
    this.apiservice.post('booking', val)
      .pipe(
        catchError(err => {
          this.loadingBar.complete();
         

          //this.spinner.hide();
          Swal.fire({
            title: 'Something went wrong!',
      
            type: 'error',
          
          })
            //this.spinner.hide();
            $("#bookRequest").css("cursor", 'pointer');
            $("#bookRequest").attr("disabled", false);
        
        this.loaderbutton.hideLoader();
          return throwError(err);
        })
      )
      .subscribe(
        (res: any) => {
          this.loadingBar.complete();

          this.loaderbutton.hideLoader();
          $("#bookForm").trigger("reset");
          if (res.status === 200) {
            Swal.fire({
              title: "We'll get back to you soon. Thank you",
        
              type: 'success',
            
            })
            //this.spinner.hide();
            $("#bookRequest").css("cursor", 'pointer');
            $("#bookRequest").attr("disabled", false);
            this.loadingBar.complete();

            this.loaderbutton.hideLoader();
           
          }

        })




  }
  else{
    return;
  }
  }


}
