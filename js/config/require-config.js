var require = {
      urlArgs: '_ts=' + (new Date()).getTime(),
    paths: {
        'jquery': 'lib/jquery-1.10.2',
        '_': 'lib/underscore',
        'backbone': 'lib/backbone'

    },
    shim: {
        // Backbone
        'backbone': {
            exports: 'Backbone'
        }

    }
};