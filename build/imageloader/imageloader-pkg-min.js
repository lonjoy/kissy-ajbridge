/*
Copyright 2012, KISSY UI Library v1.1.5
MIT Licensed
build time: Jul 3 10:48
*/
AJBridge.add("imageloader",function(c){function b(g,a){a=a||{};var f={};d.each(["auto"],function(e){if(e in a)f[e]=a[e]});a.params=a.params||{};a.params.flashvars=d.merge(a.params.flashvars,f);b.superclass.constructor.call(this,g,a)}var d=KISSY;d.extend(b,c);c.augment(b,["add","exec","remove","launch","removeOn","clear","close","insert","setAuto"]);b.version="1.0.1";c.ImageLoader=b});
