$(function () {
    // Set up smooth scrolling
    $('#nav-bar a').click(function () {
        // Get the anchor
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 46
            }, 500);
            return false;
        }
    });

    // Set up carousel
    $('#carousel0').show();
    setInterval(nextCarousel, 5000);
});

$(window).scroll(function () {
    var scrollLocation = window.scrollY;

    if (scrollLocation > 100) {
        $('#nav-bar').addClass('small');
    }
    else {
        $('#nav-bar').removeClass('small');
    }

    $('#nav-bar a').each(function () {
        var target = $($(this).attr('href'));
        if (scrollLocation >= target.offset().top - 46 && scrollLocation < target.offset().top - 46 + target.outerHeight()) {
            $(this).addClass('focus');
        }
        else {
            $(this).removeClass('focus');
        }
    });
}).scroll();

var currentIndex = 0;
var isChanging = false;
function nextCarousel() {
    if (isChanging) return;
    isChanging = true;

    $('#carousel' + currentIndex).animate({
        left: -1200
    }, 500);

    currentIndex = ++currentIndex > 3 ? 0 : currentIndex;
    $('#carousel' + currentIndex).show()
        .css({
            left: 1200
        })
        .animate({
            left: 0
        }, 500, function () {
            isChanging = false;
        });
}

function previousCarousel() {
    if (isChanging) return;
    isChanging = true;

    $('#carousel' + currentIndex).animate({
        left: 1200
    }, 500);

    currentIndex = --currentIndex < 0 ? 3 : currentIndex;
    $('#carousel' + currentIndex).show()
        .css({
            left: -1200
        })
        .animate({
            left: 0
        }, 500, function () {
            isChanging = false;
        });
}

function openModal(target) {
    $('body').css({
        overflow: 'hidden'
    });

    $('#overlay').show()
        .find('#modal')
        .css({
            animation: 'modal-open 1s'
        })
        .find('div').hide();

    $('#' + target).show();
}

function closeModal() {
    $('body').css({
        overflow: ''
    });

    $('#overlay').hide()
        .find('#modal')
        .css({
            animation: ''
        });
}