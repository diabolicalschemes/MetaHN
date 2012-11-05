// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function(){
  $('table:first a:first').html("<span class='label' style='display:inline-block;padding:2px;padding-left:5px;padding-right:4px;border-radius:0px;border:1px solid white;background:#ff6600;color:white'>7</span>");
  $('a.hnotify').click(function(){
    alert("notifications");
  });
  //$('span.comment').css("fontSize","10pt");

})

function hnotify(){
  alert("notifications");
}
