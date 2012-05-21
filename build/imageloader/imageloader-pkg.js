/*
Copyright 2012, KISSY UI Library v1.1.5
MIT Licensed
build time: May 21 11:55
*/
/**
 * @author kingfo  oicuicu@gmail.com
 */
AJBridge.add('imageloader', function(A) {

    var S = KISSY;

    /**
     * 本地存储类
     * @param {String} id					需要注册的 SWF 应用 ID
     * @param {Object} config				配置项
     * @param {Boolean} config.auto			配置项中的压缩标记。默认 true, 表示存储数据采用压缩
     */
    function ImageLoader(id, config) {
        config = config || { };
        var flashvars = { };

        S.each(['auto'], function(key) {
			if(key in config) flashvars[key] = config[key];
		});

		config.params = config.params || {};
        config.params.flashvars = S.merge(config.params.flashvars, flashvars);
		
        ImageLoader.superclass.constructor.call(this, id, config);
    }

    S.extend(ImageLoader, A);

    A.augment(ImageLoader,
        [
            'add',
            'exec',
            'remove',
            'launch',
            'removeOn',
            'clear',
            'close',
            'insert',
            'setAuto'
        ]
        );

    ImageLoader.version = '1.0.1';
    A.ImageLoader = ImageLoader;
});

