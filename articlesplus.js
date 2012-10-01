$(document).ready(function() {
	// remove default topbar link div
	$("#topbar .link") .empty()
        // Add Ask a Librarian and Classic Catalog links
	$('#topbar .link').prepend('<a href="http://www.library.gwu.edu/help/reference/ask-a-librarian">Ask a Librarian</a> | <a href="http://surveyor.gelman.gwu.edu">Catalog</a> | <a href="http://libguides.gwu.edu/databases">Subject Databases</a> | <a href="http://www.library.gwu.edu/howdoi/aboutarticlesplus">About</a> | <a href="https://docs.google.com/spreadsheet/viewform?formkey=dDJBVlR3MHMzS3pDeWRPYU5vNkh0Z2c6MQ"  target="_blank">Found a Problem?</a>');
	
	// Change Feedback link at top of page
	$('#topbar .link a').last().attr('href', function() {
		return this.href + '&entry_7=' + encodeURIComponent(location.href);	
	}); 


// Change message about number of results and add search tip	
	var count = $('#summary .highlight:last').html( );
	$('#summary').replaceWith('<div style="margin-top:5px;"><span class="highlight">' + count + '</span>&nbsp;results. <br><span id="refineSearchHelp" style="">Use quotation marks for exact phrases (e.g. "higher education").</span>&nbsp;</div>');


	// Add Feedback link at bottom of page
	// this did not work because footer is id.  Set up differently once form created. 
	//$('#footer').append('<a class="FeedbackLink" href="#">Feedback</a>');
});

