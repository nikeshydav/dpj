var thankyou = 'no';
$Aston_Martin = ["DB9", "Rapide", "Vanquish", "Vantage", "Zagato"];
$Audi = ["A2", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q6", "Q7", "R8", "RS5", "RS6", "RS7", "S4", "S5", "S6", "TT"];
$Bugatti = ["Veyron"];
$Bentley = ["Continental", "Mulsanne", "Rose", "Flying Spur"];
$BMW = ["3 Series", "5 Series", "6 Series", "7 Series", "Grand Turismo(GT)", "i8", "M series", "X1", "X3", "X5", "X6", "Z4"];
$Chevrolet = ["Beat", "Captiva", "Cruize", "Enjoy", "Sail", "Spark", "Tavera"];
$Ferrari = ["458 Itallia", "458 Spider", "California", "F12 BerlinitaFF"];
$Ford = ["Classic", "EcoSport", "Endeavour", "Fiesta", "Figo"];
$Force_Motors = ["Force Motors", "Force OneGurkha"];
$Fiat = ["Punto", "Linea"];
$Honda = ["Amaze", "Brio", "City", "Civic", "CRV", "Accord"];
$Hyundai = ["Accent", "Elantra", "Eon", "Verna", "Santro Xing", "i10", "i20", "Santa Fe", "Sonata"];
$Jaguar = ["F-Type", "XF", "XJ", "XK", "XZ"];
$Jeep = ["Grand Chreokee", "Wrangler"];
$Lamborghini = ["Aventador", "Gallardo", "Venno"];
$Land_Rover = ["Discovery 4", "Freelander 2", "Range Rover", "Range Rover Sport", "Range Rover Evoque"];
$Lexus = ["ES", "GS", "GX", "IS", "LX"];
$Mahindra = ["Bollero", "E2O", "Quanto", "Scorpio", "Thar", "Verito", "XUV500", "Xylo"];
$Maruti_Suzuki = ["800", "A Star", "Alto 800", "Alto K10", "Eeco", "Ertiga", "Estilo", "Grand Vitara", "Gypsy", "Kizashi", "Omni", "Ritz", "Swift Dzire", "Swift", "SX4", "WagonR", "Zen"];
$Masareti = ["Grand Cabrio", "Grand Turismo", "Ghibil", "Quattro Porte"];
$Mercedez_Benz = ["A Class", "B Class", "CLS", "E Class", "G Class", "GLM Class", "C Class", "R Class", "S Class", "SL", "SLK Class", "SLS"];
$Mitsubishi = ["Cedia", "Lancer", "Montero", "Outlander", "Pajero Sport"];
$Nissan = ["370 Z", "Evalia", "Micra", "Sunny", "Teana", "X-trail", "GTR"];
$Porche = ["911", "Boxster", "Cayenne", "Caymen", "Panamera"];
$Renault = ["Duster", "Fluence", "Koleos", "Pulse", "Scala", "Clio", "Dokker", "Labuna", "Scenic"];
$Rolls_Royce = ["Ghost", "Phantom", "Phantom Coupe", "Phatom Dropdead Coupe"];
$Skoda = ["Fabia", "Laura", "Rapid", "Superb", "Yeti"];
$Ssangyong = ["Rexton"];
$Tata = ["Aria", "Indica V2", "Indica eV2", "Indica Vista", "Indica eCS", "Manza", "Nano", "Safari", "Safari Storme", "Sumo", "Sumo Grande", "Venture", "Winger", "Xenon XT"];
$Toyota = ["Camry", "Corolla Altis", "Etios", "Etios Liva", "Fortuner", "Innova", "Land Cruiser", "Land Cruiser PradoPrius"];
$Volkswagen = ["Bettle", "Jetta", "Passat", "Phaeton", "Polo", "Vento", "Cross Polo", "Touareg", "Golf", "XL1"];
$Volvo = ["S 80", "S 60", "S 90", "C 30", "C 70", "XC 90", "XC 60", "XC 30", "XC 40", "V 40"];



$(function () {
    // fancy box	
    $(".fancybox").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false,
        'padding': 0,
        'afterClose': function () {
            $('.demo1').show();
            //text animation
            $(".demo1 .rotate").textrotator({
                animation: "noeffect",
                speed: 300,
                auto: false
            });
        }
    });

    $('#videofirstitme').trigger('click');

    /*if ($.cookie('videofirstitme') === "open") {
     } else {
     $('#videofirstitme').trigger('click');
     }
     $.cookie('videofirstitme', 'open', {expires: 1});*/
});

$(window).load(function () {
    // validation
    $('.digitonly').keyup(function () {
        $(this).val(function (index, oldVal) {
            return oldVal.replace(/[^\d]/g, '');
        });
    });

    $('.textonly').keyup(function () {
        $(this).val(function (index, oldVal) {
            return oldVal.replace(/[^[a-zA-Z ]*$/, '');
        });
    });

    $("#form").validate({
        errorLabelContainer: $('#error'),
        rules: {
            bmw_mobile1: {
                required: true,
                minlength: 10
            }
        },
        submitHandler: function () {
            $("#form").ajaxSubmit(function (d) {
                $("#form").html('<p class="thankyou">Thank you for your interest in BMW.<br>Your request has been submitted. We will contact you at the earliest.</p>');
                thankyou = 'yes';
            });
            $('.book_a_test_drive').hide();
            $("#form").html('<p class="thankyou">Loading...</p>');

        }
    });

    /* affix the navbar after scroll below header */
    $('#nav').affix({
        offset: {
            top: $('header').height() - $('#nav').height()
        }
    });

    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({target: '#nav'})

    /* smooth scrolling for scroll to top */
    $('.scroll-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    })

    /* smooth scrolling for nav sections */
    $('#nav .navbar-nav li>a').click(function () {
        var link = $(this).attr('href');
        var posi = $(link).offset().top + 20;
        $('body,html').animate({scrollTop: posi}, 700);
    })



    // select box 
    $("#model").prop("disabled", true);
    $("#brand").change(function () {
        var value = $(this).val();
        $("#model").prop("disabled", false);
        //$("#model > option").hide();
        //console.log($("#model > option[value*='" + value + "']").text() );
        //$("#model > option[value*='" + value + "']").show();
        $array = eval('$' + value.replace(" ", "_"));
        $("#model").html('');
        $.each($array, function (key, value) {
            $("#model").append('<option value="' + value + '" >' + value + '</option>');
        });
    });
    $("#model, #purchase").change(function () {
        $carown = $('#model').val().replace('--', ',');
        $('#bmw_currentcarowned').val($carown + ',' + $('#purchase').val())
    });



    // slider bottom start here
    $(".slide-btn1").click(function () {
        $('.active').removeClass('active');
        $("#panel1").slideDown("slow");
        $(this).toggleClass("active");
        $(".select_drive li").removeClass('diable');
        $(this).parent().siblings().addClass('diable');
        if (thankyou == 'no') {
            $('.series_head > p').text('BMW 3 Series');
            $('#bmw_seriesid').val('29027CC5-564D-E111-957C-005056820025');
        }
        return false;
    });

    $(".slide-btn2").click(function () {
        $('.active').removeClass('active');
        $("#panel1").slideDown("slow");
        $(this).toggleClass("active");
        $(".select_drive li").removeClass('diable');
        $(this).parent().siblings().addClass('diable');
        if (thankyou == 'no') {
            $('.series_head > p').text('BMW GT');
            $('#bmw_seriesid').val('1245FF7E-B3A2-E311-93ED-4487FC6104FC');
        }
        return false;
    });

    $(".slide-btn3").click(function () {
        $('.active').removeClass('active');
        $("#panel1").slideDown("slow");
        $(this).toggleClass("active");
        $(".select_drive li").removeClass('diable');
        $(this).parent().siblings().addClass('diable');
        if (thankyou == 'no') {
            $('.series_head > p').text('BMW 5 Series');
            $('#bmw_seriesid').val('2B027CC5-564D-E111-957C-005056820025');
        }
        return false;
    });

    // slider bottom end here

});