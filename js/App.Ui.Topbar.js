/**
 * Top bar of UI 
 *  
 */

Ext.ns('App.Ui');
App.Ui.Topbar = Ext.extend(Ext.Toolbar, {
	
	initComponent: function() {
	
		var tbar = [
		    {xtype: 'App.Ui.Topbar.ToolBox'},
		    {xtype: 'spacer'},
		    {xtype: 'App.Ui.Topbar.Properties'},
		];
	
		var config = {
			title: 'Creative Touch',
			dock: 'top',
            items: tbar
		};
		
		Ext.apply(this, config);
		App.Ui.Topbar.superclass.initComponent.call(this);
	}

});
Ext.reg('App.Ui.Topbar', App.Ui.Topbar);