// Copyright (c) 2011 Richard Marskell, http://littlebigcomputers.ca/
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

(function($) {
$.fn.checkAll = function(options) {  
	var defaults = {
		allCheckboxSelector:".all",
		otherChecksSelector:".chk"
	};
	var options = $.extend(defaults, options);
	
	var $this = $(this);
	var $allChk = $this.filter(options.allCheckboxSelector);
	var allChk = $allChk.get(0);
	var $othrChk = $this.filter(options.otherChecksSelector);
	$othrChk.change(function() {
		$allChk.prop("checked", $othrChk.filter(":checked").length == $othrChk.length);
	});
	$allChk.change(function(evnt) {
		$othrChk.each(function(index, element) {
			element.checked = evnt.target.checked;
		});
	});
	return this;
};  
})(jQuery);