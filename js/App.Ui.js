/**
 * UI base class of the application
 */

Ext.ns('App.Ui');
App.Ui = Ext.extend(Ext.Panel, {
	
	initComponent: function() {

		var config = {
			id: 'ui',
			cls: 'background',
			fullscreen: true,
			dockedItems: [{
				xtype: 'App.Ui.Topbar'
			}, {
				xtype: 'App.Ui.Bottombar'
			}]
		};
		Ext.apply(this, config);
		App.Ui.superclass.initComponent.call(this);
	}

});