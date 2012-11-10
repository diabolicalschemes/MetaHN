// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function(){
	

	var dd = 
	   ['<div class="dropdown">',
	    '<a class="dropdown-toggle">',
	    '<span id="ct">Y</span></a>',
	    '<ul class="dropdown-menu" id="dd" role="menu" aria-labelledby="dLabel">',
	        '<li><a tabindex="-1" href="#">No Updates</a></li>',
	        '<li class="divider"></li>',
	      '</ul></div>',
	   ].join('');

	var xxx = $(dd);

	xxx.find("a").attr("href","#").click(function(){
		$('ul.dropdown-menu').toggle();
		$('.label-yc').toggleClass("n-active");
		//$('.label-yc').css({"background":"white","color":"#ff6600"});
	})
	xxx.find("span").addClass("label").addClass("label-yc");
	xxx.addClass("dropdown");

	var hn_user = $('span.pagetop:last a:first').html();

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://vprime.twasks.com/MetaHN/"+hn_user+".json", true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	      // JSON.parse does not evaluate the attacker's scripts.
	      var resp = JSON.parse(xhr.responseText);
	      if(resp.items.length > 0){
	      	$('#ct').html(resp.items.length);
	      }
	      if (resp.action=="submit"){
	      	hn_track(window.location.href,hn_user,resp.action_data);
	      }
	      


	      $.each(resp.items, function(i, item){
	          xxx.find("#dd").append("<li><a href='"+item.url+"'>"+item.content+"</a></li>");
	      });
	  }

	}
	xhr.send();




  $('table:first a:first').replaceWith(xxx);


  $('input[type=submit]').click(function(){

  	var xhr = new XMLHttpRequest();
  	xhr.open("GET", "http://vprime.twasks.com/MetaHN/"+hn_user+".json?action=submit&url="+$('input[name=u]').val()+"&title="+$('input[name=t]').val(), true);
  	xhr.onreadystatechange = function() {
  	  if (xhr.readyState == 4) {




  	  }

  	}
  	xhr.send();

  })



})
var ccc;

function hn_track(href,hn_user,adata){

	var xhr = new XMLHttpRequest();
	var anchor = $('td.subtext a[href*="user?id='+hn_user+'"]');


	var t = anchor.parent().find('a[href*="item?id"]').attr("href");
	var ti = t.split("=");





	xhr.open("GET", "http://vprime.twasks.com/MetaHN/"+hn_user+".json?action=track&url="+t+"&id="+ti[1], true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {




	  }

	}
	xhr.send();
  
}
