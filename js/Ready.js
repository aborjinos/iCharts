/**
 * inception of UI
 */
Ext.setup(
	{
		tabletStartupScreen: 'images/sencha_ipad.png',
		phoneStartupScreen: 'images/sencha_iphone.png',
		addGlossToIcon: false,
		onReady: App.bootstrap,
		scope: App
	}
);

