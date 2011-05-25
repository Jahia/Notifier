

		// In case you don't have firebug...
		if (!window.console || !console.firebug) {
			var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
			window.console = {};
			for (var i = 0; i < names.length; ++i) window.console[names[i]] = function() {};
		}

		(function($){

			$(document).ready(function(){
				// This value can be true, false or a function to be used as a callback when the closer is clciked
				$.jGrowl.defaults.closer = function() {
					console.log("Closing everything!", this);
				};

				// A callback for logging notifications.
				$.jGrowl.defaults.log = function(e,m,o) {
                    //donothing for nw
					//$('#logs').append("<div><strong>#" + $(e).attr('id') + "</strong> <em>" + (new Date()).getTime() + "</em>: " + m + " (" + o.theme + ")</div>")
				}
                // show all notifier from me
                jQuery('.mynotif').each(function() {
                    $(this).show();
                });

                // launch notification from others and hide in the normal flow
                jQuery('.page_notifier').each(function() {
                	$(this).hide();
                    $.jGrowl($(this).html(), { header: 'from', sticky: true });
                    
                });
                // just test
				$.jGrowl("This notification will live a little longer.", { life: 3000 });

				/*
                $.jGrowl("Custom theme, and a whole bunch of callbacks...", {
					theme:  'manilla',
					speed:  'slow',
					beforeOpen: function(e,m,o) {
						console.log("I am going to be opened!", this);
					},
					open: function(e,m,o) {
						console.log("I have been opened!", this);
					},
					beforeClose: function(e,m,o) {
						console.log("I am going to be closed!", this);
					},
					close: function(e,m,o) {
						console.log("I have been closed!", this);
					}
				});




				$.jGrowl("This message will not open because we have a callback that returns false.", {
					beforeOpen: function() {
						console.log("Going to open a notification, but not really...");
					},
					open: function() {
						return false;
					}
				});

				$.jGrowl("This message will not close because we have a callback that returns false.", {
					beforeClose: function() {
						return false;
					}
				});
				*/

				$.jGrowl.defaults.closerTemplate = '<div>hide all notifications</div>';

                /*
				$('#test1').jGrowl("Testing a custom container (this one is sticky, and will also be prepended).", {
					closer: false,
					sticky: true,
					glue: 'before',
					speed: 2000,
					easing: 'easeInOutElastic',
					animateOpen: {
						height: "show",
						width: "show"
					},
					animateClose: {
						height: "hide",
						width: "show"
					}
				});

				$('#test1').jGrowl("Another custom container test.", {
					glue: 'before',
					speed: 2000,
					easing: 'easeInOutExpo',
					animateOpen: {
						height: "show",
						width: "show"
					},
					animateClose: {
						height: "hide",
						width: "show"
					}
				});

				$('#test2').jGrowl("Trying a background image.", {
					theme: 'smoke',
					closer: false
				});

				$('#test2').jGrowl("This demo notification uses images from the UI flora theme to create similar styled notifications.", {
					theme: 'flora',
					header: "Flora makes Fauna",
					closer: false
				});
				*/
			});
		})(jQuery);

