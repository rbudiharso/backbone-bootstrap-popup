(function () {
    'use strict';

    Blog.Views.ButtonView = Backbone.View.extend({

        template: JST['app/scripts/templates/ButtonView.ejs'],
        events: {
            'click button': 'showPopup'
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        showPopup: function() {
            var view = new Blog.Views.SimplePopupView({
                message: 'Simple Popup'
            });
            view.render();
        }

    });

})();
