var require = {
      urlArgs: '_ts=' + (new Date()).getTime(),
    paths: {
        'jquery': 'lib/jquery-1.10.2',
        'backbone': 'lib/backbone',
        'lodash': 'lodash-4.14.0',
        'knockout': 'lib/knockout-3.4.0',
        'text': 'lib/text',

    },
    shim: {
        // Backbone
        'backbone': {
            exports: 'Backbone'
        }

    }
};