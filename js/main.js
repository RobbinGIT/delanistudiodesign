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

   //using jquery to add hover effect with text and border to each image in the poortfolio

   //image work 4
$('.work4').hover(function () {
    $(this).css("opacity", "0.6"); // on hover change to 0.6 opacity. 
    $('.parawork4').removeClass('paraover'); // on hover the text is added
        }, function () {
            $(this).css("opacity", "1"); // this is the default opacity 
            $('.parawork4').addClass('paraover'); // this will remove the text after mouse is moved out of the image
    });
       

//image work 3
$('.work3').hover(function () {
    $(this).css("opacity", "0.6");
    $('.parawork3').removeClass('paraover');
        }, function () {
            $(this).css("opacity", "1");
            $('.parawork3').addClass('paraover');
    });


//image work 2
$('.work2').hover(function () {
    $(this).css("opacity", "0.6");
    $('.parawork2').removeClass('paraover');
        }, function () {
            $(this).css("opacity", "1");
            $('.parawork2').addClass('paraover');
    });

//image work 1

$('.work1').hover(function () {
    $(this).css("opacity", "0.6");
    $('.parawork1').removeClass('paraover');
        }, function () {
            $(this).css("opacity", "1");
            $('.parawork1').addClass('paraover');
    });
  /// images in the second row
//image work 5

$('.work5').hover(function () {
    $(this).css("opacity", "0.6");
    $('.parawork5').removeClass('paraover');
        }, function () {
            $(this).css("opacity", "1");
            $('.parawork5').addClass('paraover');
    });


//image work 6
$('.work6').hover(function () {
    $(this).css("opacity", "0.6");
    $('.parawork6').removeClass('paraover');
        }, function () {
            $(this).css("opacity", "1");
            $('.parawork6').addClass('paraover');
    });

//image work 7

$('.work7').hover(function () {
    $(this).css("opacity", "0.6");
    $('.parawork7').removeClass('paraover');
        }, function () {
            $(this).css("opacity", "1");
            $('.parawork7').addClass('paraover');
    });

//image work 8

$('.work8').hover(function () {
    $(this).css("opacity", "0.6");
    $('.parawork8').removeClass('paraover');
        }, function () {
            $(this).css("opacity", "1");
            $('.parawork8').addClass('paraover');
    });


// form validation using javascript
document.getElementById('submit').addEventListener('click', function () {
        var myName = $("#nameinputbox").val();
        var myMail = $("#emailinputbox").val();
        var myMessage = $("#messageinputbox").val();
        if ($("#nameinputbox").val() && $("#emailinputbox").val() && $("#messageinputbox").val()) {
            alert("Hi " + myName + ", your message is well recieved. Thank you for reaching us. Your feedback is always appreciated.");
            } else {
                alert("All Fileds must be filled");
            }
        })
    });


