(function () {
    'use strict';

    Blog.Views.PopupContainerView = Backbone.View.extend({

        template: JST['app/scripts/templates/PopupContainerView.ejs'],
        className: 'modal fade',
        defaults: {
            title: 'Popup'
        },
        render: function() {
            var self = this;

            this.$el.html(this.template({popup: this.defaults}));
            this.$el.modal({show: false});
            $('body').append(this.el);
            this.appendMainView()
            this.$el.modal('show');
            this.on('hidden.bs.modal', function() {
                self.remove();
            });
            return this;
        },
        renderMainView: function() {
            return {el: 'Override this to render main view'};
        },
        appendMainView: function() {
            this.$('#main-view').html(this.renderMainView().el);
        }

    });

})();
