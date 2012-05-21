package {
	import com.xintend.display.Spirit;
	import com.xintend.ajbridge.core.AJBridge;
	import web.securtiy.parameter.antiXSS;
	
	/**
	 * ...
	 * @author Kingfo[Telds longzang]
	 */
	public class AJBridge extends Spirit {
		
		public function AJBridge() {

		}
		
		override public function init():void {
			super.init();
			// entry point
			var params: Object = antiXSS(stage.loaderInfo.parameters);
			trace("AJBridge");
			com.xintend.ajbridge.core.AJBridge.bridge.deploy(params);
			
			com.xintend.ajbridge.core.AJBridge.bridge.activate();
		}
		
	}
	
}