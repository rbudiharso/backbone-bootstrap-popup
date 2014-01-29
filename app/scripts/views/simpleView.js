(function () {
    'use strict';

    Blog.Views.SimpleView = Backbone.View.extend({

        template: JST['app/scripts/templates/simpleView.ejs'],
        render: function() {
            this.$el.html(this.template());
            return this;
        }

    });

})();
