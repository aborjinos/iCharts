/**
 * Bottom bar of UI
 * No action for now just dummy
 * 
 * @TODO actions should be added, 
 */

Ext.ns('App.Ui');
App.Ui.Bottombar = Ext.extend(Ext.Toolbar, {
	
	initComponent: function() {
	
		var bbar = [
		    new Ext.Button({
				text: 'Add New Slide'
			}),
		    {xtype: 'spacer'},
		    new Ext.Button({
				text: 'Slide 1',	// is previous better?
				cls: 'x-button-pressed'
			}),
			new Ext.Button({
				text: 'Slide 2'
			}),
			new Ext.Button({
				text: 'Slide 3'		// is next better?
			}),
	        {xtype: 'spacer'},
		    new Ext.Button({
		    	text: 'Slide Design'
		    })
		];

		var config = {
			dock: 'bottom',
            items: bbar
		};
		
		Ext.apply(this, config);
		App.Ui.Bottombar.superclass.initComponent.call(this);
	}

});
Ext.reg('App.Ui.Bottombar', App.Ui.Bottombar);