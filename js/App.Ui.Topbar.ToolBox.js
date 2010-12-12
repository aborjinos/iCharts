Ext.ns('App.Ui.Topbar');

App.Ui.Topbar.ToolBox = Ext.extend(Ext.Button, {
	
	initComponent: function() {
	
		Ext.regModel('Tool', {
		    fields: [
				{name: 'uuid',  type: 'string'},
				{name: 'title',  type: 'string'}
		    ]
		});
		
		var config = {
			text: 'Toolbox',
			width: 100
		};
		
		Ext.apply(this, config);
		App.Ui.Topbar.ToolBox.superclass.initComponent.call(this);
	},
	
	//@private
	onPress : function() {
		
		var store = new Ext.data.Store({
		    model: 'Tool'
		});
		
		var tpl = new Ext.XTemplate(
		    '<tpl for=".">',
		        '<div class="tools">',
		        	'<table style="margin-bottom:0"><tr>',
		        	'<td><div class="small{uuid}"></div></td>',
		        	'<td class="tboxTitle"><h3>{title}</h3></td>',
		        	'</tr></table>',
		        '</div>',
		    '</tpl>'
		);

		var panel = new Ext.Panel({
			width: 250,
	        height: 450,
			modal: false,
	        floating: true,
	        centered: false,
	        draggable: true,
	        styleHtmlContent: true,
	        items: [{
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [{
                    width: 235,
                    height: 435,
                    store: store,
                    xtype: 'list',
                    singleSelect: true,
                    itemSelector: 'div.tools',
                    scroll: 'vertical',
                    tpl: tpl,
                    listeners: {
	                    itemtap: function(dv, idx) {
                			var r = store.getAt(idx);
		                	var newBox = new App.Ui.TouchBox({
		        				uuid: r.uuid
		        			});
		                	App.ui.add(newBox);
		                	App.ui.doLayout();
	                    }
                	}
                }]
	        }]
	    });
		/*
		var overlay = new Ext.Panel({
			width: 250,
	        height: 450,
			modal: false,
	        floating: true,
	        centered: false,
	        draggable: true,
	        styleHtmlContent: true,
	        items: [panel],
	        cls: 'htmlcontent',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1
            }
	    });
		*/
		var tools = [
		    {uuid : 'Square', title: 'Square'},
		    {uuid : 'Iphone', title: 'iPhone'},
		    {uuid : 'Keyboard', title: 'Keyboard'}
		];
		panel.showBy(this);
		store.loadData(tools);
	}

});
Ext.reg('App.Ui.Topbar.ToolBox', App.Ui.Topbar.ToolBox);