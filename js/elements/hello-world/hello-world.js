
define(function (require) {
    'use strict';

    var $ = require('jquery');

    var view = require("text!./view.html");

    var proto = Object.create(HTMLElement.prototype);



    proto.createdCallback = function () {
    	debugger
        //Initializing variables
        this.element = this;
        this.element.innerHTML = view;

       
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