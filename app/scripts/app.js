$(document).ready(function () {
    'use strict';

    var view = new Blog.Views.ButtonView({
        el: '#target'
    });
    view.render();
});
