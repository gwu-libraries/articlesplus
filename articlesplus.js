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

//end document.ready
});

