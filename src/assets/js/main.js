
var api = 'http://localhost:44355/api';
if (getDomain() == 'gscagency.co.uk')
    api = 'https://api.towerutility.co.uk:3001/api';

$(document).ready(function () {
    $('#aboutus-two-box .item').on('click', function () {
        $('.item').removeClass('active');
        $(this).addClass('active');
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
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

    $('#buttonNext1').on('click', function (e) {
        $('.row-contact').removeClass('active');
        $('.row-contact').eq(1).addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 300);
        e.preventDefault();
    });

    $('#buttonNext2').on('click', function (e) {
        $('.row-contact').removeClass('active');
        $('.row-contact').eq(2).addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 300);
        e.preventDefault();
    });

    $('#buttonNext3').on('click', function (e) {
        $('.row-contact').removeClass('active');
        $('.row-contact').eq(3).addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 300);
        e.preventDefault();
    });

    $('#buttonNext4').on('click', function (e) {
        $('.row-contact').removeClass('active');
        $('.row-contact').eq(4).addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 300);
        e.preventDefault();
    });

    $('#buttonBack1').on('click', function (e) {
        $('.row-contact').removeClass('active');
        $('.row-contact').eq(0).addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 300);
        e.preventDefault();
    });

    $('#buttonBack2').on('click', function (e) {
        $('.row-contact').removeClass('active');
        $('.row-contact').eq(1).addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 300);
        e.preventDefault();
    });

    $('#buttonBack3').on('click', function (e) {
        $('.row-contact').removeClass('active');
        $('.row-contact').eq(2).addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 300);
        e.preventDefault();
    });

    $("#link-meet").on('click', function () {
        $('html, body').animate({
            scrollTop: $('.section-team').offset().top - 20
        }, 300);
    });

    $("#link-apply").on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section-apply').offset().top - 50
        }, 300);
    });

    $("#link-work").on('click', function () {
        $('html, body').animate({
            scrollTop: $('.section-work-with-us').offset().top - 50
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
            scrollTop: $('#section-security-services').offset().top - 100
        }, 300);
    });

    $('#button-quote').on('click', function () {
        $('#error_name').hide();
        $('#error_phone').hide();
        $('#error_message').hide();
        $('#error_address').hide();
        $('#result_message').html('');

        let name = $('#form_name').val();
        if (!name) {
            $('#error_name').html('Name is required');
            $('#error_name').show();
            return;
        }

        let address = $('#form_address').val();
        if (!address) {
            $('#error_address').html('Address is required');
            $('#error_address').show();
            return;
        }

        let phone = $('#form_phone').val();
        if (!phone) {
            $('#error_phone').html('Phone is required');
            $('#error_phone').show();
            return;
        }

        let message = $('#form_message').val();
        if (!message) {
            $('#error_message').html('Message is required');
            $('#error_message').show();
            return;
        }

        $('#button-quote .loading').show();
        $('#button-quote').prop('disabled', true);
        $('#button-quote .bi-chevron-right').hide();

        $.ajax({
            method: 'POST',
            dataType: "json",
            data: JSON.stringify({
                Name: name,
                Phone: phone,
                Message: message,
                Address: address,
            }),
            url: api + '/contactUsMessage/bookQuote',
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                $('#button-quote .loading').hide();
                $('#button-quote').prop('disabled', false);
                $('#button-quote .bi-chevron-right').show();
                $('#result_message').html('We have received your quote');
                $('#form_message').val('');
                $('#form_address').val('');
                $('#form_phone').val('');
                $('#form_name').val('');
            },
            error: function () {
                $('#button-quote .loading').hide();
                $('#button-quote').prop('disabled', false);
                $('#button-quote .bi-chevron-right').show();
                $('#result_message').html('Error, please try again');
            }
        });
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

    $('#button-security').on('click', function () {
        // Tạo đối tượng FormData
        let formData = new FormData();

        // Thêm dữ liệu từ các trường text vào FormData
        formData.append('typeOfSecurityBadge', $('#type_of_security_badge_attained').val());
        formData.append('siaLicenseNumber', $('#sia_license_number').val());
        formData.append('firstName', $('#first_name').val());
        formData.append('middleName', $('#middle_name').val());
        formData.append('telephoneBusiness', $('#telephone_business').val());
        formData.append('telephoneMobile', $('#telephone_mobile').val());
        formData.append('emailAddress', $('#email_address').val());
        formData.append('presentAddress', $('#present_address').val());
        formData.append('city', $('#city').val());
        formData.append('postCode', $('#post_code').val());
        formData.append('nationality', $('#nationality').val());
        formData.append('nationalInsuranceNumber', $('#national_insurance_number').val());
        formData.append('needWorkPermit', $('#need_a_work').val());
        formData.append('hasUKDrivingLicense', $('#have_uk_driving_license').val());
        formData.append('passportNumber', $('#passport_number').val());
        formData.append('shareCode', $('#share_code').val());
        formData.append('accountHolder', $('#account_holder').val());
        formData.append('bankName', $('#bank_name').val());
        formData.append('bankAddress', $('#bank_address').val());
        formData.append('sortCode', $('#sort_code').val());
        formData.append('accountNumber', $('#account_number').val());
        formData.append('education', $('#education').val());
        formData.append('employerNameAddress', $('#employer_name_address').val());
        formData.append('positionHeld', $('#position_held').val());
        formData.append('reasonForLeaving', $('#reason_for_leaving').val());
        formData.append('finalSalary', $('#final_salary').val());
        formData.append('dutiesRoles', $('#duties_roles').val());
        formData.append('dateStartedLeft', $('#date_started_left').val());
        formData.append('employerNameAddress2', $('#employer_name_address_2').val());
        formData.append('positionHeld2', $('#position_held_2').val());
        formData.append('reasonForLeaving2', $('#reason_for_leaving_2').val());
        formData.append('finalSalary2', $('#final_salary_2').val());
        formData.append('dutiesRoles2', $('#duties_roles_2').val());
        formData.append('dateStartedLeft2', $('#date_started_left_2').val());
        formData.append('titleOfReferee', $('#title_of_referee').val());
        formData.append('fullName', $('#full_name').val());
        formData.append('jobTitle', $('#job_title').val());
        formData.append('dateKnownFrom', $('#date_known_from').val());
        formData.append('fullAddress', $('#full_address').val());
        formData.append('telephoneNo', $('#telephone_no').val());
        formData.append('emailAddress', $('#email_address').val());
        formData.append('faxNo', $('#fax_no').val());
        formData.append('titleOfReferee2', $('#title_of_referee_2').val());
        formData.append('fullName2', $('#full_name_2').val());
        formData.append('jobTitle2', $('#job_title_2').val());
        formData.append('dateKnownFrom2', $('#date_known_from_2').val());
        formData.append('fullAddress2', $('#full_address_2').val());
        formData.append('telephoneNo2', $('#telephone_no_2').val());
        formData.append('emailAddress2', $('#email_address_2').val());
        formData.append('faxNo2', $('#fax_no_2').val());

        // Thêm file từ trường input file vào FormData
        let drivingLicenseFile = $('#driving_license_upload')[0].files[0];
        if (!checkFileSize(drivingLicenseFile, 5)) return;
        if (drivingLicenseFile) {
            formData.append('drivingLicenseUpload', drivingLicenseFile);
        }
        let unimeasurements = $('#unimeasurements')[0].files[0];
        if (!checkFileSize(unimeasurements, 5)) return;
        if (unimeasurements) {
            formData.append('unimeasurements', unimeasurements);
        }
        let photo_of_yourself = $('#photo_of_yourself')[0].files[0];
        if (!checkFileSize(photo_of_yourself, 5)) return;
        if (photo_of_yourself) {
            formData.append('photoOfYourself', photo_of_yourself);
        }
        let proof_of_address = $('#proof_of_address')[0].files[0];
        if (!checkFileSize(proof_of_address, 5)) return;
        if (proof_of_address) {
            formData.append('proofOfAddress', proof_of_address);
        }
        let insurance_held = $('#insurance_held')[0].files[0];
        if (!checkFileSize(insurance_held, 5)) return;
        if (insurance_held) {
            formData.append('insuranceHeld', insurance_held);
        }
        let sia_badge = $('#sia_badge')[0].files[0];
        if (!checkFileSize(sia_badge, 5)) return;
        if (sia_badge) {
            formData.append('siaBadge', sia_badge);
        }

        // Gửi dữ liệu qua AJAX
        $('#button-security .loading').show();
        $('#button-security').prop('disabled', true);
        $('#button-security .bi-chevron-right').hide();
        $.ajax({
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            url: api + '/contactUsMessage/gscMessage',
            success: function (result) {
                $('#button-security .loading').hide();
                $('#button-security').prop('disabled', false);
                $('#button-security .bi-chevron-right').show();
                $('#result_message').html('Form submitted successfully!');
            },
            error: function (error) {
                $('#button-security .loading').hide();
                $('#button-security').prop('disabled', false);
                $('#button-security .bi-chevron-right').show();
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

    setInterval(function () {
        $('.es-portal-root a').remove();
    }, 1000);


    const options = {
        autoClose: true,
        dateFormat: 'dd/MM/yyyy',
        locale: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear',
            firstDay: 0
        }
    };
    new AirDatepicker('#DateOfBirth', options);
    new AirDatepicker('#ApplicationDate', options);

    $('#addAdditionalCompany').click(function (e) {
        e.preventDefault();

        let lastSection = document.querySelector('.employment-entry:last-child');
        let columns = ['Company', 'Position', 'Address', 'TimeAtCompany'];
        let valid = validateRequiredFields(columns, lastSection);

        if (valid) {
            var newEntry = $('.employment-entry:first').clone();
            newEntry.find('input').val('');
            newEntry.find('input').each(function () {
                let name = $(this).attr("name");
                if (name) {
                    $(this).attr("name", name + "_" + ($('.employment-entry').length + 1));
                }
            });
            newEntry.appendTo('#employment-sections');
        }
    });

    $('#buttonSecurityFormStep1').on('click', function (e) {
        let columns = ['Title', 'FirstName', 'SurName', 'DateOfBirth', 'Email', 'Mobile', 'Address', 'City', 'PostCode', 'Gender', 'Nationality'];
        autoFillFormData(columns);
        let valid = validateRequiredFields(columns);
        if (valid) {
            $('.row-contact').removeClass('active');
            $('.row-contact').eq(1).addClass('active');
            $('html, body').animate({ scrollTop: 0 }, 300);
        }
        e.preventDefault();
    });

    $('#buttonSecurityFormStep2').on('click', function (e) {
        let columns = ['TypeOfSecurity', 'SIALicenceNo', 'UTRNo', 'HoldDrivingLicenceYes', 'ImmigrationControlYes', 'LegalRightToWorkYes', 'StudentVisaYes', 'AllegedOffencesOutstandingYes'];
        let valid = validateRequiredFields(columns);
        if (valid) {
            $('.row-contact').removeClass('active');
            $('.row-contact').eq(2).addClass('active');
            $('html, body').animate({ scrollTop: 0 }, 300);
        }
        e.preventDefault();
    });

    $('#buttonSecurityFormStep3').on('click', function (e) {
        let lastSection = document.querySelector('.employment-entry:last-child');
        let columns = ['Company', 'Position', 'Address', 'TimeAtCompany'];
        let valid = validateRequiredFields(columns, lastSection);
        if (valid) {
            $('.row-contact').removeClass('active');
            $('.row-contact').eq(3).addClass('active');
            $('html, body').animate({ scrollTop: 0 }, 300);
        }
        e.preventDefault();
    });
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
function autoFillFormData(fieldIds) {
    fieldIds.forEach(id => {
        let input = document.getElementById(id);
        if (!input) return;

        if (input.type === "text" && !input.classList.contains("air-datepicker")) {
            input.value = "Test Data";
            input.dispatchEvent(new Event("input"));
        }
        else if (input.type === "tel") {
            input.value = "0123456789"; // Giả lập số điện thoại
            input.dispatchEvent(new Event("input"));
        }
        else if (input.type === "email") {
            input.value = "test@example.com"; // Giả lập email
            input.dispatchEvent(new Event("input"));
        }
        else if (input.type === "radio") {
            let radios = document.querySelectorAll(`input[name="${input.name}"]`);
            if (radios.length > 0) {
                radios[0].checked = true;
                radios[0].dispatchEvent(new Event("change"));
            }
        }
        else if (input.tagName.toLowerCase() === "select") {
            if (input.options.length > 1) {
                input.selectedIndex = 1;
                input.dispatchEvent(new Event("change"));
            }
        }
        else if (input.classList.contains("air-datepicker")) {
            let today = new Date().toISOString().split("T")[0];
            input.value = today;
            input.dispatchEvent(new Event("input"));

            if (input.airDatepicker) {
                input.airDatepicker.selectDate(new Date());
            }
        }
    });

    console.log("✅ Selected form fields have been auto-filled!");
}
function checkFileSize(file, maxSizeMB) {
    if (!file) return true;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
        alert(`File ${file.name} Exceeds the allowed size limit (${maxSizeMB}MB).`);
        return false;
    }
    return true;
}
function validateRequiredFields(fieldIds, section = document) {
    let isValid = true;

    fieldIds.forEach(inputId => {
        let input = section.querySelector(`#${inputId}`);
        let errorDiv = section.querySelector(`#error_${inputId}`);

        if (!input) return; // Bỏ qua nếu input không tồn tại trong section

        if (!errorDiv) {
            errorDiv = document.createElement("div");
            errorDiv.id = `error_${inputId}`;
            errorDiv.className = "help-block with-errors";
            input.parentNode.appendChild(errorDiv);
        }

        if (input.type === "radio") {
            let name = input.name;
            let radios = section.querySelectorAll(`input[name="${name}"]`);
            let isChecked = Array.from(radios).some(radio => radio.checked);

            if (!isChecked) {
                errorDiv.style.color = "red";
                errorDiv.style.display = "block";
                errorDiv.textContent = "Please select an option!";
                isValid = false;
            } else {
                errorDiv.textContent = "";
                errorDiv.style.display = "none";
            }

            if (!input.dataset.hasEventListener) {
                radios.forEach(radio => {
                    radio.addEventListener("change", function () {
                        errorDiv.textContent = "";
                        errorDiv.style.display = "none";
                    });
                });
                input.dataset.hasEventListener = "true";
            }
        } else {
            if (input.value.trim() === "") {
                errorDiv.style.color = "red";
                errorDiv.style.display = "block";
                input.classList.add("border-danger");
                errorDiv.textContent = "This field is required!";
                isValid = false;
            } else {
                errorDiv.textContent = "";
                errorDiv.style.display = "none";
                input.classList.remove("border-danger");
            }

            if (!input.dataset.hasEventListener) {
                input.addEventListener("input", function () {
                    if (input.value.trim() !== "") {
                        errorDiv.textContent = "";
                        errorDiv.style.display = "none";
                        input.classList.remove("border-danger");
                    }
                });
                input.dataset.hasEventListener = "true";
            }
        }
    });

    return isValid;
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