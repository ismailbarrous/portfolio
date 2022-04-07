$(window).on("load", function() {
  if(localStorage.getItem('dark-mode') == 'active'){
          $('.light').add('.p-moon').removeClass('active-theme');
          $('.moon').add('.p-light').addClass('active-theme'); 
          $('.p-moon').add('.p-light').removeClass(animations);
          $('body').css('background', '#3d3c4c');
          $(':root').css('--txt-clr','white');
          $('.project').css('box-shadow','0px 7px 12px rgb(255 255 255 / 50%)');
          $('.project-section').addClass('active-slider');
  }
  $('body').css('opacity','1');
  $('.link ion-icon').click(function(){
      $('.link').removeClass('active');
      $(this).parent().addClass('active');
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
        $('.landing').fadeOut(1000);
    }
    $.fn.aboutmefadeout = function(){
        $('.about-me').fadeOut(1000);
      }
    var y, h;
    $.fn.portfoliofadeout = function(){
      $('.portfolio').fadeOut(1000);
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
          if ((y + h) > $(xl).position().top + 100) {
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
          setTimeout(function(){$('.d-content').addClass('animate__animated animate__fadeInLeft');
        $('.about-me').addClass('visited'); localStorage.setItem('about-me','visited');},300);
        }
      }
    $.fn.skills = function() {
      y = $(document).scrollTop();
      h = $(window).height();
      setTimeout(function(){
        $('.title:first-child').addClass("animate__animated animate__jackInTheBox");
        $('.skill').each(function(i,el){
          if(i % 2 == 0){
              setTimeout(function(){$(el).addClass("animate__animated animate__fadeInUp")}, (i+1) * 500);
            }else{
              setTimeout(function(){$(el).addClass("animate__animated animate__fadeInDown")}, (i+1) * 500);  
            }
          $('.skill svg').each(function(e,el){
            var percentage = 420 - (420 * $(el).parent().attr('data-percentage')) / 100;
            setTimeout(function(){$(el).children(':nth-child(2)').css('stroke-dashoffset','-' + percentage)},(e+1) * 700);
            $(el).before('<div class="percentage">' + (100 - $(el).parent().attr('data-percentage'))  + '%</div>');
          });
          setTimeout(function(){$('.nav').css('pointer-events','all')},2000);
        });
        setTimeout(function(){
          if(window.matchMedia('(min-width:992px)').matches){
            $('.title:nth-child(2)').addClass("animate__animated animate__jackInTheBox");
          }
        },4500);
          $(window).scroll(function(e) {
            y = $(document).scrollTop();
            h = $(window).height();
          if($('.about-me').hasClass('visited')){
            return;
          }else{
            $.fn.frameworks();
          }
          });
    },500);
    };
    $.fn.projectscroll = function () {
        $('.project').each(function(i,el){         
            if(window.matchMedia( "(max-width: 678px)" ).matches){
              if((y+h) > $(el).position().top + 15){
                 $(el).addClass('animate__animated animate__zoomInLeft').attr('style','opacity:1!important;');
                 setTimeout(function(){$('.nav').css('pointer-events','all')},1500);
              }
          }else{
            if((y+h) > $(el).position().top + 20){
              setTimeout(function(){$(el).addClass('animate__animated animate__zoomInLeft').css('opacity','1');$('.nav').css('pointer-events','all')}, (i+1) * 200);
            }
          }
      });
        setTimeout(function(){
          $('.portfolio').addClass('visited');
          localStorage.setItem('portfolio','visited');
        },3000);
    }
    $.fn.portfolio = function () {
      y = $(document).scrollTop();
      h = $(window).height();
      $('.portfolio .title').addClass("animate__animated animate__jackInTheBox");
      $.fn.projectscroll();
      $(window).scroll(function(e) {
        y = $(document).scrollTop();
        h = $(window).height();
        if($('.portfolio').hasClass('visited')){
          return;
        }else{
          $.fn.projectscroll();
      }
      });
    }
    $('#home').click(function(){
      localStorage.setItem('active-page','home');
      $('.nav').css('pointer-events','none');
      $.fn.aboutmefadeout();
      $.fn.portfoliofadeout();
        if($('.landing').hasClass('visited') || localStorage.getItem('home') == 'visited'){
          setTimeout(function(){$('.nav').css('pointer-events','all')},2000);
          $('.landing *').removeClass(animations);
          $('.p-social').add('.text').add('.landing-img').add('.landing svg').css('opacity','1');
          setTimeout(function(){$('.landing').fadeIn(1000);},1000);
        }else{
        setTimeout(function(){
          setTimeout(function(){
            $('.landing *').removeClass(animations);
            $('.landing').fadeIn();
            $('.landing svg').addClass('animate__animated animate__fadeInDown');
            if(window.matchMedia( "(max-width: 650px)" ).matches){
              $('.phone-socials .p-social').each(function(i,el){
                setTimeout(function(){$(el).addClass('animate__animated animate__rollIn')}, (i+1) * 500);
              });
              $('.landing .text ').addClass('animate__animated animate__fadeInBottomLeft');
              setTimeout(function(){$('.nav').css('pointer-events','all')},2000); 
            }else{
              setTimeout(function(){$('.landing-img').addClass('animate__animated animate__fadeInRight')},1000);
              setTimeout(function(){$('.landing .text ').addClass('animate__animated animate__fadeInBottomLeft');$('.nav').css('pointer-events','all')},1500);
            }
          },0);
          $('.landing').addClass('visited');
          localStorage.setItem('home','visited');
          }, 500);
      }
  });
    $('#about-me').click(function(){
      localStorage.setItem('active-page','about-me');
      $('html, body').animate({
        'scrollTop' : $(".about-me").position().top
      });
      $('.nav').css('pointer-events','none');
      $('.about-me *').removeClass(animations);
      $.fn.landingfadeout();
      $.fn.portfoliofadeout();
      if($('.about-me').hasClass('visited') || localStorage.getItem('about-me') == 'visited'){
        setTimeout(function(){$('.nav').css('pointer-events','all')},2000);
        $('.about-me').css('display','none');
        $('.framework').each(function(a,xl){
          $(xl).children('.progress-bar').children('.progress').css('width',$(xl).children('.progress-bar').children('.progress').attr('data-progress'));
        });
        $('.skill svg').each(function(e,el){
            var percentage = 420 - (420 * $(el).parent().attr('data-percentage')) / 100;
            $(el).children(':nth-child(2)').css('stroke-dashoffset','-' + percentage);
            $(el).before('<div class="percentage">' + (100 - $(el).parent().attr('data-percentage'))  + '%</div>');
          });
        $('.about-me *').css('opacity','1');
        setTimeout(function(){$('.about-me').fadeIn(1000);},1000);
      }else{
        var duration = 500;
        setTimeout(function(){
          $('.about-me').fadeIn();
          $.fn.skills();
        },duration);
      }
    });
    $('#portfolio').click(function(){
      localStorage.setItem('active-page','portfolio');
      $('.nav').css('pointer-events','none');
      $('.portfolio *').removeClass(animations);
      $.fn.landingfadeout();
      $.fn.aboutmefadeout();
      $('html, body').animate({
        'scrollTop' : $(".portfolio").position().top
      });
      if($('.portfolio').hasClass('visited') || localStorage.getItem('portfolio') == 'visited'){
        setTimeout(function(){$('.nav').css('pointer-events','all')},2000);
        $('.portfolio *').removeClass(animations).css('opacity','1');
        setTimeout(function(){$('.portfolio').fadeIn(1000);},1000);
      }else{
        $('.portfolio').fadeIn();
        setTimeout(function(){$.fn.portfolio()},1500);
      }
    });
    $('.moon').add('.p-light').click(function(){
      if($('.moon').add('.p-light').hasClass('active-theme')){
        return;
      }else{
        localStorage.setItem('dark-mode','active');
        $('.light').add('.p-moon').removeClass('active-theme');
        $('.moon').add('.p-light').addClass('active-theme'); 
          $('.p-moon').add('.p-light').removeClass(animations);
          $('.p-light').addClass('animate__animated animate__fadeOutUp');
          $('.p-moon').css('top','0');
          $('.p-light').css('opacity','0');
          setTimeout(function(){$('.p-moon').addClass('animate__animated animate__fadeInDown')},1500);
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
        localStorage.setItem('dark-mode','not-active');
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
  var active_page = "#"+localStorage.getItem('active-page') + "";
  if(localStorage.getItem('active-page') == null){
    $('#home').click();
  }else{
    $(active_page).click();
  }
});