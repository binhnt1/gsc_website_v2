
var api = 'http://localhost:44355/api';
if (getDomain() == 'gscagency.co.uk')
    api = 'https://api.towerutility.co.uk:3001/api';

$(document).ready(function () {
    $('#aboutus-two-box .item').on('click', function () {
        $('.item').removeClass('active');
        $(this).addClass('active');
    });

    $('#aboutus-slide .numbers li').on('click', function () {
        $('.aboutus-slide-content').removeClass('active');
        $('#aboutus-slide .numbers li').removeClass('active');
        $(this).addClass('active'); let index = $(this).index();
        $('.aboutus-slide-content').eq(index).addClass('active');
    });

    $('#legal-slide-2 .numbers li').on('click', function () {
        $('.legal-slide-content').removeClass('active');
        $('#legal-slide-2 .numbers li').removeClass('active');
        $(this).addClass('active'); let index = $(this).index();
        $('.legal-slide-content').eq(index).addClass('active');

        $('html, body').animate({
            scrollTop: $('.legal-slide-content.active').offset().top
        }, 300);
    });

    var numbers = [1, 2, 4, 7, 8, 9];
    numbers.forEach((number) => {
        $("#find-out-" + number).on('click', function () {
            $('html, body').animate({
                scrollTop: $('#section-service-' + number).offset().top
            }, 300);
        });
        $("#find-out-title-" + number).on('click', function () {
            $('html, body').animate({
                scrollTop: $('#section-service-' + number).offset().top
            }, 300);
        });
    });

    $("#security-services").on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-security-services').offset().top
        }, 300);
    });

    $('#button-contact-us').on('click', function () {
        $('#error_name').hide();
        $('#error_email').hide();
        $('#error_message').hide();
        $('#error_subject').hide();
        $('#result_message').html('');

        let name = $('#form_name').val();
        if (!name) {
            $('#error_name').html('Name is required');
            $('#error_name').show();
            return;
        }

        let subject = $('#form_subject').val();
        if (!subject) {
            $('#error_subject').html('Subject is required');
            $('#error_subject').show();
            return;
        }

        let email = $('#form_email').val();
        if (!email) {
            $('#error_email').html('Email is required');
            $('#error_email').show();
            return;
        }

        let message = $('#form_message').val();
        if (!message) {
            $('#error_message').html('Message is required');
            $('#error_message').show();
            return;
        }

        $('#button-contact-us .loading').show();
        $('#button-contact-us').prop('disabled', true);
        $('#button-contact-us .bi-chevron-right').hide();

        $.ajax({
            method: 'POST',
            dataType: "json",
            data: JSON.stringify({
                Name: name,
                Email: email,
                Message: message,
                Subject: subject,
            }),
            url: api + '/contactUsMessage/gscMessage',
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                $('#button-contact-us .loading').hide();
                $('#button-contact-us').prop('disabled', false);
                $('#button-contact-us .bi-chevron-right').show();
                $('#result_message').html('We have received your message');
                $('#form_message').val('');
                $('#form_subject').val('');
                $('#form_email').val('');
                $('#form_name').val('');
            },
            error: function () {
                $('#button-contact-us .loading').hide();
                $('#button-contact-us').prop('disabled', false);
                $('#button-contact-us .bi-chevron-right').show();
                $('#result_message').html('Error, please try again');
            }
        });
    });

    $("#form_eventDateTo").on("change", function () {
        if (this.value) {
            this.setAttribute(
                "data-date",
                moment(this.value, "YYYY-MM-DD")
                    .format(this.getAttribute("data-date-format"))
            );
        }
    }).trigger("change");

    $("#form_eventDateFrom").on("change", function () {
        if (this.value) {
            this.setAttribute(
                "data-date",
                moment(this.value, "YYYY-MM-DD")
                    .format(this.getAttribute("data-date-format"))
            );
        }
    }).trigger("change");
});

function getDomain() {
    let domain = '';
    if (document.location.ancestorOrigins && document.location.ancestorOrigins.length > 0) {
        domain = document.location.ancestorOrigins[0];
    }
    if (!domain) domain = document.location.href || document.referrer || document.location.origin;
    domain = domain.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .split('/')[0];
    return domain.toLowerCase();
}

// JavaScript để làm cho phần tử sticky
var stickyElement = $("#legal-slide-2 .numbers");
if (stickyElement && stickyElement.length > 0) {
    var stickyOffset = stickyElement.offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyOffset) {
            stickyElement.addClass('sticky');
        } else {
            stickyElement.removeClass('sticky');
        }
    });
}