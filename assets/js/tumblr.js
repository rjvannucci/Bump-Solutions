function tumblr(resp) {
	var posts = resp.posts;
	$('#blog').replaceWith('<div/>');
	$span = $('#empty-space');
	for (var i=0; i<posts.length; i++) {
		var p = posts[i];
      var title = p['regular-title'] || p['link-text'] || null;
		if (title)
			$span.append('<div class="accordion-group" id="balao"><div class="accordion-heading"><a href="'+p['url-with-slug']+'" class="action collapse-local accordion-toggle" data-parent="accordion-blog">'+title+'</a></div><div id="accordion_'+i+'" class="accordion-body collapse"><div class="accordion-inner"><span>'+p['slug']+'</span></div></div></div>');
	}
}