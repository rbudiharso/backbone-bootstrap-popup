(function () {
    'use strict';

    Blog.Views.SimplePopupView = Blog.Views.PopupContainerView.extend({
        defaults: {
            title: 'Simple Popup'
        },
        renderMainView: function() {
            var view = new Blog.Views.SimpleView();
            return view.render();
        }
    });

})();
