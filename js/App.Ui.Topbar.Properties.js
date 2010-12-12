/**
 * Properties window of UI
 * Opacity, Text, zindex are added for now
 * 
 * @TODO use xml to build structure
 */

Ext.ns('App.Ui.Topbar');
App.Ui.Topbar.Properties = Ext.extend(Ext.Button, {
	
	//@private
	initComponent: function() {
	
		var config = {
			text: 'Properties',
			width: 100
		};
		
		this.opened = false;
		Ext.apply(this, config);
		App.Ui.Topbar.Properties.superclass.initComponent.call(this);
	},
	
	//@private
	onPress : function() {
		if(this.opened)
			return;

		// dummy draggable properties form
		// @TODO need more properties
		// @TODO read properties from xml dynamically
		// @TODO read actions from xml dynamically
		// @TODO update form when any element is selected
		var form = {
            scroll: 'vertical',
            standardSubmit : false,
            autoRender: true,
            floating: true,
            modal: false,
            centered: false,
            width: 250,
            draggable: true,
	        height: 450,
            hideOnMaskTap: false,
            items: [{
                xtype: 'fieldset',
                title: 'Text in field',
                items: [{
                    xtype: 'textfield',
                    listeners: {
                		change: function(t, val) {
                			if(App.getActiveEl())
                				App.getActiveEl().fireEvent('changeText', val);
                		}
                	}
                }]
            },{
                xtype: 'fieldset',
                title: 'Opacity',
                items: [{
                    xtype: 'slider',
                    value: 10,
                    minValue: 1,
                    maxValue: 10,
                    listeners: {
                		change: function(s, t, val) {
                			if(App.getActiveEl())
                				App.getActiveEl().fireEvent('changeOpacity', val);
                		}
                	}
                }]
            }, {
                xtype: 'fieldset',
                title: 'Layer Order',
                items: [{
                    xtype: 'spinnerfield',
                    value : 1,
                    minValue: 1,
                    listeners: {
                		change: function(s, t, val) {
                			if(App.getActiveEl())
                				App.getActiveEl().fireEvent('changeLayerOrder', val);
                		}
                	}
                }]
            }]
		};
		
		form = new Ext.form.FormPanel(form);
        form.showBy(this);
        this.opened = true;
	}

});
Ext.reg('App.Ui.Topbar.Properties', App.Ui.Topbar.Properties);