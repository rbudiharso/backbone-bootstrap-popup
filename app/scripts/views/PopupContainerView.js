(function () {
    'use strict';

    Blog.Views.PopupContainerView = Backbone.View.extend({

        template: JST['app/scripts/templates/PopupContainerView.ejs'],
        events: {
            'click .close': 'hidePopup'
        },
        defaults: {
            title: 'Popup'
        },
        render: function() {
            this.$el.html(this.template({popup: this.defaults}));
            this.$el.modal({show: false});
            this.$el.css({
                top: '30px',
                left: 0,
                width: '100%',
                zIndex: 9999
            });
            $('body').append(this.el);
            this.appendMainView()
            this.$el.modal('show');
            return this;
        },
        hidePopup: function() {
            this.$el.modal('hide');
            this.remove();
        },
        renderMainView: function() {
            return {el: 'Override this to render main view'};
        },
        appendMainView: function() {
            this.$('#main-view').html(this.renderMainView().el);
        }

    });

})();
