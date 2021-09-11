$(document).ready(function () {

    //toggle between image and description

    // toggle in the product image and on clicking image the design details appear
    $(".design").click(function () {
        $("#imageofdesign, #detailsofdesign").toggle();
    })
    // toggle in the product image and on clicking image the development details appear
    $(".dev").click(function () {
        $("#imageofdevelopment, #detailsofdevelopment").toggle();
    })
    // toggle in the product image and on clicking image the product details appear
    $(".product").click(function () {
        $("#imageofproducts, #detailsofproduct").toggle();
    })

   
// form...
document.getElementById('submit').addEventListener('click', function () {
        var myName = $("#nameinputbox").val();
        var myMail = $("#emailinputbox").val();
        var myMessage = $("#messageinputbox").val();
        if ($("#nameinputbox").val() && $("#emailinputbox").val() && $("#messageinputbox").val()) {
            alert("Hi " + myName + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please fill all fields!");
        }
    })
});



//add hover effect and text to each project
$('.project1').hover(function () {
    $(this).css("opacity", "0.6");
    $('.p1').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p1').addClass('text');
});

$('.project2').hover(function () {
    $(this).css("opacity", "0.6");
    $('.p2').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p2').addClass('text');
});
$('.project3').hover(function () {
    $(this).css("opacity", "0.6");
    $('.p3').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p3').addClass('text');
});
$('.project4').hover(function () {
    $(this).css("opacity", "0.6");
    $('.p4').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p4').addClass('text');
});
$('.project5').hover(function () {
    $(this).css("opacity", "0.6");
    $('.p5').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p5').addClass('text');
});

$('.project6').hover(function () {
    $(this).css("opacity", "0.6");
    $('.p6').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p6').addClass('text');
});

$('.project7').hover(function () {
    $(this).css("opacity", "0.6");
    $('.p7').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p2').addClass('text');
});

$('.project8').hover(function () {
    $(this).css("opacity", "0.6");
    $('.p8').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p8').addClass('text');
});