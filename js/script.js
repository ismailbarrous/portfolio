$(window).on("load", function() {
  setTimeout(function(){ $('header').css('bottom','-17%')},6000);
  $('body').css('opacity','1');
  $('.link ion-icon').click(function(){
      $('.link').removeClass('active');
      $(this).parent().addClass('active');
  });
  $(document).scroll(function(){

    $('header').css('bottom','-17%');
  })
  $(".hover-bar").add('.indicator').mouseenter(
      function() {
          $('header').css('bottom','-1px');
    });
        $('.img-bg').click(function(){
      $('.project-section').add('.img-bg').fadeOut();
    })
    var animations = 'animate__backInDown animate__zoomOutRight animate__zoomInLeft animate__rollOut animate__rollIn animate__jackInTheBox animate__backInLeft animate__backInRight animate__backInUp animate__backOutDown animate__backOutLeft animate__backOutRight animate__backOutUp animate__bounceIn animate__bounceInDown animate__bounceInLeft animate__bounceInRight animate__bounceInUp animate__bounceOut animate__bounceOutDown animate__bounceOutLeft animate__bounceOutRight animate__bounceOutUp animate__fadeIn animate__fadeInDown animate__fadeInDownBig animate__fadeInLeft animate__fadeInLeftBig animate__fadeInRight animate__fadeInRightBig animate__fadeInUp animate__fadeInUpBig animate__fadeInTopLeft animate__fadeInTopRight animate__fadeInBottomLeft animate__fadeInBottomRight animate__fadeOut animate__fadeOutDown animate__fadeOutDownBig animate__fadeOutLeft animate__fadeOutLeftBig animate__fadeOutRight animate__fadeOutRightBig animate__fadeOutUp animate__fadeOutUpBig animate__fadeOutTopLeft animate__fadeOutTopRight animate__fadeOutBottomRight animate__fadeOutBottomLeft';
    var fadeIn = 'animate__animated animate__fadeInLeft';
    var fadeOut = 'animate__animated animate__fadeOutRight';
    $('.gallery-trigger').click(function(){
      var lol = $(this).parent().parent().children('.images').clone();
      $('.main-image').add('.sub-images').add('.project-title h2').empty(); 
      $('.main-image').append(lol.children(':first').clone());
      $('.sub-images').append(lol.html());
      $('.sub-images').children(':first').addClass('active-img');
      $('.project-title h2').append($(this).parent().parent().attr('data-title'));
      $('.project-title a').attr('href',$('.project-links a:nth-child(2)').attr('href'));
      $('.project-section').add('.img-bg').fadeIn('slow');
      $('.main-image img').addClass(fadeIn);
      $('.sub-images img').click(function(){
        $('.project-content *').css('pointer-events','none');
        $('.main-image img').removeClass('animate__fadeInLeft').addClass('animate__fadeOutRight');
        var clone = $(this).clone();
        $('.sub-images img').removeClass('active-img');
        $(this).addClass('active-img');
        setTimeout(function(){
            $('.main-image').empty();
            $('.main-image').append(clone);
            $('.main-image img').addClass(fadeIn);
          },700);
          setTimeout(function(){
             $('.project-content *').css('pointer-events','all');
          },1700);
    });
    });
    $.fn.landingfadeout = function(){
      $('.landing svg').addClass('animate__animated animate__fadeOutUp');
      if(window.matchMedia( "(max-width: 650px)" ).matches){
          $('.phone-socials .p-social').each(function(i,el){
            setTimeout(function(){$(el).addClass('animate__animated animate__rollOut')}, (i+1) * 500);
          });
        }
      setTimeout(function(){$('.landing-img').addClass('animate__animated animate__fadeOutRight')},700);
      setTimeout(function(){$('.landing .text ').addClass('animate__animated animate__fadeOutBottomLeft')},1200);
      setTimeout(function(){$('.landing').fadeOut()},1500);
    }
    $.fn.aboutmefadeout = function(){
      $('.about-me .title').addClass('animate__animated animate__fadeOutUp');
      $('.skill').add('.fr-image').add('.d-content').addClass('animate__animated animate__fadeOutLeft');
      $('.frameworks').add('.d-image').addClass('animate__animated animate__fadeOutRight');
        setTimeout(function(){$('.about-me').fadeOut()},700);
    }
    var y, h;
    $.fn.portfoliofadeout = function(){
      $('.portfolio .title').addClass('animate__animated animate__fadeOutUp');
      $('.project').each(function(i,el){
        setTimeout(function(){$(el).addClass('animate__animated animate__zoomOutRight')}, parseInt($('.project').length) * 500 - ((i+1) * 500));
      });
      setTimeout(function () {
        $('.portfolio').fadeOut();
      },parseInt($('.project').length) * 400);
    }
    $.fn.frameworks = function(){
        var second_title = $('.title:nth-child(2)');
        var additional_skills = $('.fr-image');
        var third_title = $('.title:nth-child(4)');
        var aboutmeimg = $('.description');
        var b = $('.frameworks');
        var progress_bar = $('.framework');
        if ((y + h) > second_title.position().top + 200) {
            second_title.addClass("animate__animated animate__jackInTheBox");
          }
        if ((y + h) > additional_skills.position().top + 300) {
            additional_skills.addClass("animate__animated animate__fadeInLeft");
          }
        if ((y + h) > b.position().top + 300) {
            setTimeout(function(){b.addClass("animate__animated animate__fadeInRight")},300);
          }
        progress_bar.each(function(a,xl){
          if ((y + h) > $(xl).position().top + 400) {
              setTimeout(function(){
              $(xl).children('.progress-bar').children('.progress').animate({width:$(xl).children('.progress-bar').children('.progress').attr('data-progress')},1000);
            }, (a +1) * 1000);
          }
        });
        if ((y + h) > third_title.position().top + 200) {
          third_title.addClass("animate__animated animate__jackInTheBox");
        }
        if((y + h) > aboutmeimg.position().top + 200){
          $('.description .d-image').addClass('animate__animated animate__fadeInRight');
        }
        if((y + h) > aboutmeimg.position().top + 300){
          setTimeout(function(){$('.d-content').addClass('animate__animated animate__fadeInLeft')},300);
        }
      }
    $.fn.skills = function() {
      y = $(document).scrollTop();
      h = $(window).height();
       var duration;
      if($('.portfolio').css('display') == 'block'){
        duration =0;
      }else if($('.landing').css('display') == 'block'){
        duration = 700;
      }
      setTimeout(function(){$('.title:first-child').addClass("animate__animated animate__jackInTheBox")},duration);
      $('.skill').each(function(i,el){
        if(i % 2 == 0){
            setTimeout(function(){$(el).addClass("animate__animated animate__fadeInUp")}, (i+1) * 500);
          }else{
            setTimeout(function(){$(el).addClass("animate__animated animate__fadeInDown")}, (i+1) * 500);  
          }
        setTimeout(function(){$('.skill svg').each(function(e,el){
          var percentage = 420 - (420 * $(el).parent().attr('data-percentage')) / 100;
          setTimeout(function(){$(el).children(':nth-child(2)').css('stroke-dashoffset','-' + percentage)},(e+1) * 1000);
          $(el).before('<div class="percentage">' + (100 - $(el).parent().attr('data-percentage'))  + '%</div>')
        });$('.nav').css('pointer-events','all')},2000);
      });
      setTimeout(function(){
        $.fn.frameworks();
      },8500);
      $(window).scroll(function(e) {
        y = $(document).scrollTop();
        h = $(window).height();
        $.fn.frameworks();
      });
    };
    $.fn.projectscroll = function () {
        $('.project').each(function(i,el){
          if((y+h) > $(el).position().top + 100){

          if(window.matchMedia( "(max-width: 678px)" ).matches){
           $(el).addClass('animate__animated animate__zoomInLeft').css('opacity','1'); 
          }else{
            setTimeout(function(){$(el).addClass('animate__animated animate__zoomInLeft').css('opacity','1');
          $('.nav').css('pointer-events','all');}, (i+1) * 200);
          }
          }
      });
    }
    $.fn.portfolio = function () {
      y = $(document).scrollTop();
      h = $(window).height();
      $('.portfolio .title').addClass("animate__animated animate__jackInTheBox");
      $.fn.projectscroll();
      $(window).scroll(function(e) {
        y = $(document).scrollTop();
        h = $(window).height();
        $.fn.projectscroll();
      });
    }
    $('#home').click(function(){
      $('.nav').css('pointer-events','none');
      var duration;
      if($('.portfolio').css('display') == 'block'){
        duration = parseInt($('.project').length) * 500;
      }else{
        duration = 1000;
      }
      $.fn.aboutmefadeout();
      $.fn.portfoliofadeout();
      setTimeout(function(){
        $('.project').css('opacity','0');
        setTimeout(function(){
          $('.landing *').removeClass(animations);
          $('.landing').fadeIn();
          $('.landing svg').addClass('animate__animated animate__fadeInDown');
          if(window.matchMedia( "(max-width: 650px)" ).matches){
            $('.phone-socials .p-social').each(function(i,el){
              setTimeout(function(){$(el).addClass('animate__animated animate__rollIn')}, (i+1) * 500);
            });
          }
          setTimeout(function(){$('.landing-img').addClass('animate__animated animate__fadeInRight')},1000);
          setTimeout(function(){$('.landing .text ').addClass('animate__animated animate__fadeInBottomLeft');$('.nav').css('pointer-events','all')},1500);
        },100);
          
        }, duration);
  });

    $('#about-me').click(function(){
      $('.nav').css('pointer-events','none');
      $('.about-me *').removeClass(animations);
      var duration;
      if($('.portfolio').css('display') == 'block'){
        duration = parseInt($('.project').length) * 500;
      }else{
        duration = 1000;
      }
      $.fn.landingfadeout();
      $.fn.portfoliofadeout();
      setTimeout(function(){
        $('.project').css('opacity','0');
        $('.about-me').fadeIn();
        $.fn.skills();
      },duration);
    });

    $('#portfolio').click(function(){
      $('.nav').css('pointer-events','none');
      $('.project').css('opacity','0');
      $('.portfolio *').removeClass(animations);
      $.fn.landingfadeout();
      $.fn.aboutmefadeout();
      $('.portfolio').fadeIn();
      setTimeout(function(){$.fn.portfolio()},2000);
    });
    $('#home').click();
    $('.moon').add('.p-light').click(function(){
      if($('.moon').add('.p-light').hasClass('active-theme')){
        return;
      }else{
        $('.light').add('.p-moon').removeClass('active-theme');
        $('.moon').add('.p-light').addClass('active-theme'); 
          $('.p-moon').add('.p-light').removeClass(animations);
          $('.p-light').addClass('animate__animated animate__fadeOutUp');
          $('.p-moon').css('top','0');
          $('.p-light').css('opacity','0');
          setTimeout(function(){$('.p-moon').addClass('animate__animated animate__fadeInDown')},1500);
        console.log($('body *').css('color'));
        $('body').css('background', '#ff9800');
        setTimeout(function(){
          $('body').css('background', '#a12c07');
        },700);
        setTimeout(function(){
          $('body').css('background', '#3d3c4c');
          $(':root').css('--txt-clr','white');
          $('.project').css('box-shadow','0px 7px 12px rgb(255 255 255 / 50%)');
        },1500);
        $('.project-section').addClass('active-slider');
      }
    });
    $('.light').add('.p-moon').click(function(){
      if($('.light').add('.p-moon').hasClass('active-theme')){
        return;
      }else{
        $('.moon').add('.p-light').removeClass('active-theme');
        $('.light').add('.p-moon').addClass('active-theme');
        $('.p-moon').add('.p-light').removeClass(animations);
        $('.p-moon').addClass('animate__animated animate__fadeOutUp');
        setTimeout(function(){$('.p-moon').css('top','-65%')},1000);
        setTimeout(function(){$('.p-light').addClass('animate__animated animate__fadeInDown')},1500);
        $('body').css('background', '#a12c07');
        setTimeout(function(){
          $('body').css('background', '#ff9800');
        },700);
        setTimeout(function(){
          $('body').css('background', 'white');
          $(':root').css('--txt-clr','#3d3c4c');  
          $('.project').css('box-shadow','0px 7px 12px rgb(0 0 0 / 50%)');
        },1500);
        $('.project-section').removeClass('active-slider');
      }
    });
});