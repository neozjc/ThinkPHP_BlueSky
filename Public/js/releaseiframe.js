$.fn.panel.defaults.onBeforeDestroy = function() {/* 回收内存 */
    var frame = $('iframe', this);
    if (frame.length > 0) {
        frame[0].contentWindow.document.write('');
        frame[0].contentWindow.close();
        frame.remove();
        if ($.browser.msie) {
            CollectGarbage();
        }
    }
};
