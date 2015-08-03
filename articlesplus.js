$(document).ready(function() {
	// get chat box before emptying link div	
	var chatimg = $(".chat.top");
	// empty topbar link div	
	$("#topbar .link").empty();
        // Add Ask a Librarian and Classic Catalog links
	$('#topbar .link').prepend('<a href="http://www.library.gwu.edu/help/reference/ask-a-librarian">Ask a Librarian</a> | <a href="http://findit.library.gwu.edu/catalog">Catalog</a> | <a href="http://libguides.gwu.edu/databases">Subject Databases</a> | <a href="http://www.library.gwu.edu/howdoi/aboutarticlesplus">About</a> | <a href="https://docs.google.com/spreadsheet/viewform?formkey=dDJBVlR3MHMzS3pDeWRPYU5vNkh0Z2c6MQ"  target="_blank">Found a Problem?</a>&nbsp;&nbsp;');
	
	// Change Feedback link to include URL to pass to Google Form 
	$('#topbar .link a').last().attr('href', function() {
		return this.href + '&entry_7=' + encodeURIComponent(location.href);	
	}); 
	// add chat link back
	$("#topbar .link").append(chatimg);

	// Change message about number of results and add search tip	
	var count = $('#summary .highlight:last').html( );
	$('#summary').replaceWith('<div style="margin-top:5px;"><p><span class="highlight">' + count + '</span>&nbsp;results. <br><span id="refineSearchHelp" style="">Use quotation marks for exact phrases (e.g. "higher education").</span>&nbsp;</p></div>');

	// Add inset note about catalog
	// hiding since issues seem solved.	
	//	if ($('#facet\\:library_catalog_filter[applied|="true"]').length > 0) {
	//		$('label[for|="facet:library_catalog_filter"]').append('<div class="excluded"><table cellspacing="0" cellpadding="5"><tbody><tr><td><span class="highlight">All items not included yet. </span><a href="http://surveyor.gelman.gwu.edu" target="_blank">Go to complete catalog</a>.</td></tr></tbody></table></div>');
	//	}

	// Hide orange "Get Journal Article" button pointing to print holdings - temporary?
	$('.bgh-get-document-button').hide();

	// from mreidsma Prettify Best Bets
	if($(".best-bet-list").length > 0) {
  
		var bbTitle = $(".best-bet-title").text();
		var bbURL = $(".best-bet").find(".more").find("a").attr("href");
		var bbDesc = $(".best-bet-body").find(".detail").text();
 
		if(bbDesc === ".") {
 
			$("li.best-bet").html('<div class="theme-best-bet-icon"></div><div class="best-bet-title"><a href="' + bbURL + '">' + bbTitle + '</a></div>');
 
			} else { // Has a description
 
			$("li.best-bet").html('<div class="theme-best-bet-icon"></div><div class="best-bet-title"><a href="' + bbURL + '">' + bbTitle + '</a></div><div class="best-bet-body"><div class="detail"><p>' + bbDesc + '</p></div>');
 
		}
 
	}
	// provide alternatives in case of error
	//$(".errorMessage").append("  <br>Please try one of the <a href=\'http://libguides.gwu.edu/databases\'>Libraries\' subject databases</a> or the <a href=\'http://surveyor.gelman.gwu.edu\'>catalog</a>.");  

    // Summon 2.0 preview bar from mreidsma 
	function createCookie(name,value,days) {
		console.log("working");
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
		$("#gw-close-button").closest("#new-results").css("display","none");
	}
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
 
	if(readCookie('noPreview') !== 'prevent') {
	
		var newBanner = '<style> .gw-button, .gw-button-grey { padding: .333em .75em; font-size: 1.1em; line-height: 1.3125em; -webkit-border-radius: .25em; -moz-border-radius: .25em; border-radius: .25em; display: inline-block; font-weight: bold; text-decoration: none; cursor: pointer; margin-top: .825em; font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif; } .gw-button { color: #fff; background: #2971a7; border: 1px solid #4081af; border-bottom-color: #20559a; } a.gw-button:hover { color: #fff !important; } .gw-button-grey { color: #444; background: #eee; border: 1px solid #aaa; border-top: 1px solid #ccc; border-left: 1px solid #ccc;} a.gw-button-grey:hover { color: #333 !important; } #new-results { display: block; line-height: 1.5em; margin: 0; padding: .5em 1.6em; background: #004165; border: 1px solid #6694cc; text-align: left; color: #444; position: relative; } #new-results p { font-size: 1.4em; font-weight: bold; width: 55%; float: left; color: #ffffff;} #new-results ul { list-style-type: none; } #new-results ul li { width: 12em; float: left; margin-left: 2em; } .gw-close { cursor: pointer; position: absolute; top: .25em; right: .25em; text-indent: -9999px; background: transparent url(//close-icon.png) top left no-repeat; height: 20px; width: 20px; } </style> <div id="new-results"> <p>Preview the new version of ArticlesPlus.</p> <ul> <li><a href="http://gw.preview.summon.serialssolutions.com" class="gw-button">Try the new search</a></li> <li><a href="mailto:refdesk@gwu.edu?subject=New%20Search%20Feedback" class="gw-button-grey FeedbackLink">Give Feedback</a></li> </ul> <div style="clear: both;"></div> <div class="gw-close" id="gw-close-button" onclick="createCookie(\'noPreview\',\'prevent\',7)">[x] Close</div> </div>';
	
		$("#page").prepend(newBanner);
	
	}

//end document.ready
});

