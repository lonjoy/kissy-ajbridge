/**
 * @author kingfo  oicuicu@gmail.com
 */
describe("store",function(){
	if(location.protocol === 'file:') return;
	
	var S = KISSY,
	    F = KISSY.Flash,
	    A = AJBridge,
		Loader = A.ImageLoader,
		defconfig={
			src : "../imageloader.swf",
            params:{
                bgcolor:"#C4C4C4"
            }	
		},
		assets=[
		'assets/mm.png',
		'assets/d-1240x1754.jpg',
		'assets/200911201003040589.gif',
		'assets/123.gif',
		'assets/not-found.url',
		'imageloader-spec.js',
		'http://a248.e.akamai.net/assets.github.com/images/modules/header/logov5-hover.png' // item_security_error
		];
	
	describe("configurable store",function(){
		var swfId = "ks-image-loader",
			container = "FC",
			loader,failed={},error={},swfReady={},contentReady={},
			config = S.merge(defconfig,
						 {
						 	id:swfId,
							attrs: {
				                width: 215,
				                height: 138
				            },
							auto:false
						 });
		loader = new Loader(container,config);				 
		it("should ready", function(){
			var contentReady;
			loader.on("contentReady", function(ev) {
                contentReady = true;    
            });
			waitsFor(function(){ return contentReady; },"loader never ready",3000);
			expect(loader.add).toBeDefined();
			expect(loader.exec).toBeDefined();
			expect(loader.remove).toBeDefined();
			expect(loader.launch).toBeDefined();
			expect(loader.removeOn).toBeDefined();
			expect(loader.clear).toBeDefined();
			expect(loader.close).toBeDefined();
			expect(loader.insert).toBeDefined();
			expect(loader.setAuto).toBeDefined();
		});
		
		it('should running',function(){
			var itemRunning,captureTimeBox = {},completeTimeBox={};
			for(var i= 0 , n = assets.length;i < n; i++){
				loader.add(assets[i])
			}
			loader.on('item',function(ev){
				if (!itemRunning) {
					loader.insert([{
						src: 'badlink.png'
					}]);
				}
				itemRunning = true;
				completeTimeBox[ev.info.src] = captureTimeBox[ev.info.src] = new Date().getTime();
			});
			
			
			waitsFor(function(){ return itemRunning; },"loader never run",3000);
			
			var itemCapture;
			loader.on('itemCapture',function(ev){
				expect(ev.info.width).toBeGreaterThan(1);
				expect(ev.info.height).toBeGreaterThan(1);
				itemCapture = true;
				expect(ev.info.status).toEquel(200);
				captureTimeBox[ev.info.src] = new Date().getTime() - captureTimeBox[ev.info.src];
				console.info("itemCapture:" + captureTimeBox[ev.info.src] + '|'+ ev.info.src)
			});
			waitsFor(function(){ return itemCapture; },"loader never capture",3000);
			
			var itemComplete;
			loader.on('itemComplete',function(ev){
				itemComplete = true;
				completeTimeBox[ev.info.src] = new Date().getTime() - completeTimeBox[ev.info.src];
				console.info(ev.info);
				expect(ev.info.status).toEquel(200);
				console.info("itemComplete:" + completeTimeBox[ev.info.src] + '|'+ ev.info.src)
			});
			waitsFor(function(){ return itemComplete; },"loader never complete",3000);
			
			var finish;
			loader.on('finish',function(ev){
				finish = true;
				expect(ev.info.status).not.toBeDefined();
				expect(ev.info.src).not.toBeDefined();
				expect(ev.info.type).not.toBeDefined();
			});
			waitsFor(function(){ return finish; },"loader never finish",5000);
			
			
			var securityError;
			loader.on('securityError',function(ev){
				securityError = true;
			});
			waitsFor(function(){ return finish; },"loader never security error",5000);
			
			// begin download
			loader.launch();
			
		});
		
		
	});
	
});
