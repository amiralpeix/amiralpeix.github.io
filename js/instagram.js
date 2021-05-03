function instagramAjaxFeed(user,items) {
	if (typeof user !== 'undefined' && typeof items !== 'undefined' && items <= 12) {
		$.ajax({
			data: {
				"__a" : 1,
			},
		    type: 'GET',
		    dataType: 'json',
		    url: 'https://www.instagram.com/'+user+'/',
		})
		.done(function( data, textStatus, jqXHR ) {
			externalURL = "https://instagram.com/p/";
			wrapper = $('.instagram-feed ul');
			edges = data.graphql.user.edge_owner_to_timeline_media.edges;
			i = 1;
			
			$.each(edges, function(index, element) {
				imageSrc = element.node.thumbnail_resources[4].src;
				imageCode = element.node.shortcode;
				imagePageLink = externalURL + imageCode;
				
				if(i <= items) {
					wrapper.append($('<li><a href="'+imagePageLink+'" target="_blank" style="background: url('+imageSrc+') no-repeat center / cover #fff;"><img src="'+imageSrc+'" alt="Instagram" /></a></li>'));
				}
				
				i++;
	        });
		})
		.fail(function( jqXHR, textStatus, errorThrown ) {
			//alert('falló');
		});
	} else {
		//alert('error');
	}
}