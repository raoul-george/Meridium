
define(function (require) {
    'use strict';

    var $ = require('jquery');
    var Test = require('./test');

    var proto = Object.create(HTMLElement.prototype);



    proto.createdCallback = function () {
    	debugger
        new Test(this);
    };


    proto.attachedCallback = function () {
        
    };


    proto.detachedCallback = function () {
    };

   

    proto.attributeChangedCallback = function (attrName, oldVal, newVal) {
       
    };

    

    var helloWorld = document.registerElement("hello-world", { prototype: proto });

    return (helloWorld);
});