$("document").ready(function(){

    // Mobile Menu
    $('.toggle-icon').click(function(){
        $('.menu-items').toggleClass('left');
    });

    // Mobile Search Toggle 
    $(".tablet-search").click(function(){
        $(".show-search").toggleClass('active');
    });
    // Mega Menu Toggle 
    $(".mega-menu-toggle").click(function(){
        $(".megabox").toggleClass('active');
        $(this).toggleClass('active');
    });
    // rating star toggle
    $(".rating-head").click(function(){
        $(".rating-control").slideToggle('slow');
        $(this).toggleClass('active');
    });
    // see all toggle menu
    $('.see-moreBtn').click(function(){
        $(".see-all").slideToggle(200);
		var $this = $(this);
		$this.toggleClass('see-moreBtn');
		if($this.hasClass('see-moreBtn')){
			$this.text('See more...');			
		} else {
			$this.text('See less...');
		}
	});
    // Report Text Show 
        $("#dot-icon1").click(function(){
            $("#show-text1").slideToggle();
        });
        $("#dot-icon2").click(function(){
            $("#show-text2").slideToggle();
        });

        // Booking table Control
        $(".single-guest").click(function(){
            $(".colups-guest-items").slideToggle();
            $(this).toggleClass('active');
        });
    // Listing Top Slider Items
    $('.slider-items').owlCarousel({
        loop:true,
        center:true,
        autoplay:true,
        margin:24,
        dots:false,
        nav:true,
        navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    })
    // Vedio  Slider Items
    $('.vedio-slider').owlCarousel({
        loop:true,
        margin:24,
        autoplay:true,
        dots:false,
        nav:true,
        navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
    // Similar Resturent Post Items
    $('.similar-carousel').owlCarousel({
        loop:true,
        margin:24,
        autoplay:true,
        dots:false,
        nav:true,
        navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            520:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    })
    // Booking Table Chose Data
    $('.select-date-slide').owlCarousel({
        loop:true,
        margin:14,
        autoplay:false,
        dots:false,
        nav:true,
        navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
        responsive:{
            0:{
                items:4
            },
            500:{
                items:6
            },
            768:{
                items:3
            },
            992:{
                items:5
            }
        }
    });

    // Slick Carousel 
    $('.testimonials-slide-say').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonials-slide-author'
      });
      $('.testimonials-slide-author').slick({
        centerMode: true,
        autoplay:true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        asNavFor: '.testimonials-slide-say',
        dots: false,
        nav:false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
});
// Vedio Paralax Magnific
$('.play-btn').magnificPopup({
    type:'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>',
      
        patterns: {
          youtube: {
            index: 'youtube.com/', 
      
            id: 'v=',
      
            src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
          },
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: 'https://player.vimeo.com/video/%id%?autoplay=1'
          },
          gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
          }
      
        },
      
        srcAction: 'iframe_src',
      }

});
// range Slider
var thumbsize = 14;

function draw(slider,splitvalue) {

    /* set function vars */
    var min = slider.querySelector('.min');
    var max = slider.querySelector('.max');
    var lower = slider.querySelector('.lower');
    var upper = slider.querySelector('.upper');
    var legend = slider.querySelector('.legend');
    var thumbsize = parseInt(slider.getAttribute('data-thumbsize'));
    var rangewidth = parseInt(slider.getAttribute('data-rangewidth'));
    var rangemin = parseInt(slider.getAttribute('data-rangemin'));
    var rangemax = parseInt(slider.getAttribute('data-rangemax'));

    /* set min and max attributes */
    min.setAttribute('max',splitvalue);
    max.setAttribute('min',splitvalue);

    /* set css */
    min.style.width = parseInt(thumbsize + ((splitvalue - rangemin)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)))+'px';
    max.style.width = parseInt(thumbsize + ((rangemax - splitvalue)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)))+'px';
    min.style.left = '0px';
    max.style.left = parseInt(min.style.width)+'px';
    min.style.top = lower.offsetHeight+'px';
    max.style.top = lower.offsetHeight+'px';
    legend.style.marginTop = min.offsetHeight+'px';
    slider.style.height = (lower.offsetHeight + min.offsetHeight + legend.offsetHeight)+'px';
    
    /* correct for 1 off at the end */
    if(max.value>(rangemax - 1)) max.setAttribute('data-value',rangemax);

    /* write value and labels */
    max.value = max.getAttribute('data-value'); 
    min.value = min.getAttribute('data-value');
    lower.innerHTML = min.getAttribute('data-value') + ".00";
    upper.innerHTML = max.getAttribute('data-value') + ".00";

}

function init(slider) {
    /* set function vars */
    var min = slider.querySelector('.min');
    var max = slider.querySelector('.max');
    var rangemin = parseInt(min.getAttribute('min'));
    var rangemax = parseInt(max.getAttribute('max'));
    var avgvalue = (rangemin + rangemax)/2;
    var legendnum = slider.getAttribute('data-legendnum');

    /* set data-values */
    min.setAttribute('data-value',rangemin);
    max.setAttribute('data-value',rangemax);
    
    /* set data vars */
    slider.setAttribute('data-rangemin',rangemin); 
    slider.setAttribute('data-rangemax',rangemax); 
    slider.setAttribute('data-thumbsize',thumbsize); 
    slider.setAttribute('data-rangewidth',slider.offsetWidth);

    /* write labels */
    var lower = document.createElement('span');
    var upper = document.createElement('span');
    lower.classList.add('lower','value');
    upper.classList.add('upper','value');
    lower.appendChild(document.createTextNode(rangemin));
    upper.appendChild(document.createTextNode(rangemax));
    slider.insertBefore(lower,min.previousElementSibling);
    slider.insertBefore(upper,min.previousElementSibling);
    
    /* write legend */
    var legend = document.createElement('div');
    legend.classList.add('legend');
    var legendvalues = [];
    for (var i = 0; i < legendnum; i++) {
        legendvalues[i] = document.createElement('div');
        var val = Math.round(rangemin+(i/(legendnum-1))*(rangemax - rangemin));
        legendvalues[i].appendChild(document.createTextNode(val));
        legend.appendChild(legendvalues[i]);

    } 
    slider.appendChild(legend);

    /* draw */
    draw(slider,avgvalue);

    /* events */
    min.addEventListener("input", function() {update(min);});
    max.addEventListener("input", function() {update(max);});
}

function update(el){
    /* set function vars */
    var slider = el.parentElement;
    var min = slider.querySelector('#min');
    var max = slider.querySelector('#max');
    var minvalue = Math.floor(min.value);
    var maxvalue = Math.floor(max.value);
    
    /* set inactive values before draw */
    min.setAttribute('data-value',minvalue);
    max.setAttribute('data-value',maxvalue);

    var avgvalue = (minvalue + maxvalue)/2;

    /* draw */
    draw(slider,avgvalue);
}

var sliders = document.querySelectorAll('.min-max-slider');
sliders.forEach( function(slider) {
    init(slider);
});






