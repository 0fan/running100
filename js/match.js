define(['jquery'], function ($) {
	function Match(cfg){

		var _cfg = {
			step: 5,
			index: 0,
		};

		this.progress = $('[data-progress]')
		this.CFG = $.extend(_cfg, cfg);

		this.init();
	};

	Match.prototype = {
		up: function () {
			var self = this;

			if (self.CFG.index >= self.CFG.step) {
				return;
			}
			self.CFG.index++;
			self.render();
		},
		down: function () {
			var self = this;

			if (self.CFG.index <= 0) {
				return;
			}
			self.CFG.index--;
			self.render();
		},
		init: function () {
			var self = this;

			var progress = self.progress.find('.progress-content');
			progress.html('');
			for (var i = 0; i < self.CFG.step; i++){
				$('<div class="item"></div>').appendTo(progress);
			}

			self.render();
		},
		render: function () {
			var self = this;

			var items = self.progress.find('.item');
			items.removeClass('_active');
			for (var i = 0; i < self.CFG.index; i++) {
				items.eq(i).addClass('_active');
			}
		}
	};

	return Match;

});