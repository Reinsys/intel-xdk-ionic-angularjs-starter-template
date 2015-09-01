/*
 * Copyright (C) 2015 Intel Corporation. All rights reserved.
 */

(function() {
  
  "use strict";

  /**
   * Get the max height of a set of elements
   *
   * @param {jQuery} $elements: jQuery set
   * @return {Integer}: maximum height of the elements in $elements
   */
  var get_max_height_headers = function($elements) {
    if (!$elements.length) { return 0; }

    var heights = $elements.map(function(i, element) {
      return $(element).is('.bar-header') ? 44 : 88;
    });

    return Math.max.apply(null, heights);
  };

  var get_max_height_footers = function($headers, $footers) {
    if (!$headers.length || !$footers.length) { return 0; }

    var header_heights = $headers.map(function(i, element) {
      return $(element).is('.bar-header') ? 44 : 88;
    });
    var footer_heights = $footers.map(function(i, element) {
      return $(element).is('.bar-footer') ? 44 : 88;
    });
    
    var max_header = Math.max.apply(null, header_heights);
    var max_footer = Math.max.apply(null, footer_heights);

    return max_header + max_footer;
  };  


  var set_content_offsets = function(outerNode) {
    var $outer = $(outerNode);
    var $contents = $outer.children('.upage-content');

    var $headers = $outer.children('.bar-header, .bar-subheader');
    var $footers = $outer.children('.bar-footer, .bar-subfooter');

    if (window.jQuery) {
      if (window.jQuery('.uib_crossbar.topbar')
        .filter(':animated, .uib_bar_visible').length) { return; }
    }

    // find the maximum height amongst the fixed headers/footers and adjust
    // the top offset and padding-bottom of the content areas to match
    $outer
      .css({ 'padding-bottom': get_max_height_footers($headers, $footers) })
      .removeClass('hidden');
    $contents.css({ 'top': get_max_height_headers($headers) });
  };


  var set_all_content_offsets = function() {
    $('.upage-outer').each(function() {
      set_content_offsets(this);
    });
  };


  $(function() {
    set_all_content_offsets();
    $(window).on('resize', set_all_content_offsets);
    $(document).on('recalc-marginal-offset', set_all_content_offsets);
    $(document).on('pagechange', set_all_content_offsets);
  });

})();
