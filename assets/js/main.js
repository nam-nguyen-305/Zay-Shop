$("#owl-home").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 5000,
  dotsSpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$("#owl-brand").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 5000,
  dotsSpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 4,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
});
$("#owl-product").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 5000,
  dotsSpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
$("#owl-related").owlCarousel({
  loop: true,
  margin: 20,
  dot: true,
  dotsEach: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 5000,
  dotsSpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// ---------------------------------
// Dropdown menu
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var dropDown = this.el.find(".dropDown");
    // Evento
    dropDown.on(
      "click",
      { el: this.el, multiple: this.multiple },
      this.dropdown
    );
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el
        .find(".dropDown-menu")
        .not($next)
        .slideUp()
        .parent()
        .removeClass("open");
    }
  };

  var accordion = new Accordion($("#accordion"), false);
});
// ====================================
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}
function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
// ===========================
$(".btn-size").click(function () {
  var this_val = $(this).html();
  $("#product-size").val(this_val);
  $(".btn-size").removeClass("btn-secondary");
  $(".btn-size").addClass("btn-success");
  $(this).removeClass("btn-success");
  $(this).addClass("btn-secondary");
  return false;
});
// product-gallery
var productImg = document.getElementById("product-img");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};
smallImg[4].onclick = function () {
  productImg.src = smallImg[4].src;
};
smallImg[5].onclick = function () {
  productImg.src = smallImg[5].src;
};
smallImg[6].onclick = function () {
  productImg.src = smallImg[6].src;
};
smallImg[7].onclick = function () {
  productImg.src = smallImg[7].src;
};
smallImg[8].onclick = function () {
  productImg.src = smallImg[8].src;
};
smallImg[9].onclick= function(){
  productImg.src=smallImg[9].src;
};
