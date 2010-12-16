package {
	import com.xintend.ajbridge.core.AJBridge;
	import com.xintend.display.Spirit;
	
	/**
	 * ...
	 * @author Kingfo[Telds longzang]
	 */
	public class AJBridgeTest extends Spirit {
		
		public function AJBridgeTest():void {
			
		}
		
		override public function init():void {
			super.init();
			// entry point
			
			var params: Object = stage.loaderInfo.parameters;
			trace("AJBridge");
			AJBridge.bridge.deploy(params);
			
			AJBridge.bridge.activate();
			
		}
		
	}
	
}