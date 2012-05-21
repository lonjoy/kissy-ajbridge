/*
Copyright 2012, KISSY UI Library v1.1.5
MIT Licensed
build time: May 21 11:55
*/
AJBridge.add("clipboard",function(c){function b(g,a){a=a||{};var f={};d.each(["data","format","btn","hand"],function(e){if(e in a)f[e]=a[e]});a.params=a.params||{};a.params.flashvars=d.merge(a.params.flashvars,f);b.superclass.constructor.call(this,g,a)}var d=KISSY;d.extend(b,c);c.augment(b,["getData","clearData","setData"]);b.version="1.0.0";c.Clipboard=b});
