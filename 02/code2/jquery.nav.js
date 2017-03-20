;(function ($) {
    $.fn.extend({
        'nav': function () {
            //在插件里的this经过一些封装处理，this就是表示jq对象
            //而不需要再次使用
            this.find('.nav').css({
                'list-style': 'none',
                'margin': '0',
                'padding': '0',
                'display': 'none'
            });
            this.find('.nav').parent().hover(function () {
                $(this).find('.nav').slideDown('normal');
            }, function () {
                $(this).find('.nav').stop().slideUp('normal');
            });
            return this;
        }
    });
})(jQuery);