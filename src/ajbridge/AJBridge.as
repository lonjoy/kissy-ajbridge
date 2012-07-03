package {
	import com.xintend.display.Spirit;
	import com.xintend.ajbridge.core.AJBridge;
	import web.security.external.SecurityExternalInterface;
	
	/**
	 * ...
	 * @author Kingfo[Telds longzang]
	 */
	public class AJBridge extends Spirit {
		
		public function AJBridge() {
			
		}
		
		override public function init():void {
			super.init();
			SecurityExternalInterface.watch(this);
			// entry point
			trace("AJBridge");
			com.xintend.ajbridge.core.AJBridge.bridge.deploy(stage.loaderInfo.parameters);
			
			com.xintend.ajbridge.core.AJBridge.bridge.activate();
		}
	
	}

}