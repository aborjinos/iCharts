/**
 * Heart of application 
 * Responsible for resize & drag and drop
 * 
 * @TODO decide which is better double tab to resize or drag
 * @TODO update properties form when any element is selected
 */

Ext.ns('App.Ui');
App.Ui.TouchBox = Ext.extend(Ext.Container, {

	// @private
	initComponent: function() {
		this.topbarHeight = 50;
		var config = {
			cls: 'orig' + this.uuid,
			draggable: false
		};
		Ext.apply(this, config, this.initialConfig);
		App.Ui.TouchBox.superclass.initComponent.call(this);
	},

	// @private
	onRender : function(ct, position) {
		App.Ui.TouchBox.superclass.onRender.call(this, ct, position);
		// add event listener
		this.on('dragend', this.onDragend, this);
		this.on('changeOpacity', this.changeOpacity, this);
		this.on('changeText', this.changeText, this);
		this.on('changeLayerOrder', this.changeLayerOrder, this);
		this.mon(
			this.el,
			{
				doubletap: this.onDoubleTap,
				touchmove: this.onTouchmove,
				touchstart: this.onTouchstart,
				touchend: this.onTouchend,
				pinch: this.onPinch,
				scope: this
			}
		);
		this.lastestSize = this.getSize();
		var windowSize = Ext.getBody().getSize();
		var x = (windowSize.width - this.lastestSize.width) / 2;
		var y = (windowSize.height - this.lastestSize.height) / 2 - this.topbarHeight;
		this.setPosition(x, y);
	},

	// @private
	afterRender: function() {
		App.Ui.Playground.superclass.afterRender.call(this);
		App.setActiveEl(this);
	},
	
	// @private
	setDragging : function(status) {
		if (status == true)
			this.el.dom.style.border = '1px solid green';
		else
			this.el.dom.style.border = '';
	},
	
	// @private
	setResizing : function(status) {
		if (status == true)
			this.el.dom.style.border = '1px solid blue';
		else
			this.el.dom.style.border = '';
	},

	/**
	 * adds the touch event listener
	 */
	addTouchEvents: function() {
		this.mon(
			this.el,
			{
				touchmove: this.onTouchmove,
				touchstart: this.onTouchstart,
				touchend: this.onTouchend,
				pinch: this.onPinch,
				scope: this
			}
		);
	},

	/**
	 * remove the touch event listener
	 */
	removeTouchEvents: function() {
		this.mun(
			this.el,
			{
				touchmove: this.onTouchmove,
				touchstart: this.onTouchstart,
				touchend: this.onTouchend,
				pinch: this.onPinch,
				scope: this
			}
		);
	},

	/**
	 * on double tap destroy the object
	 *
	 * @param {} event
	 * @param {} html
	 * @param {} obj
	 */
	onDoubleTap: function(event, html, obj) {
		if (typeof this.draggable == 'object') {
			this.draggable.purgeListeners ();
			this.draggable.destroy();
			this.draggable = false;
			this.addTouchEvents();
			this.setDragging(false);
		} else {
			this.setDragging(true);
			this.removeTouchEvents();
			this.setDraggable(true);
		}
		App.setActiveEl(this);
	},

	/**
	 * on touch start
	 *
	 * @param {} event
	 * @param {} html
	 * @param {} obj
	 */
	onTouchstart: function(event, html, obj) {
		App.setActiveEl(this);
		this.setResizing(true);
	},

	/**
	 * on touch move
	 *
	 * @param {} event
	 * @param {} html
	 * @param {} obj
	 */
	onTouchmove: function(event, html, obj) {
		this.setSize(this.lastestSize.width + event.deltaX, this.lastestSize.height + event.deltaY);
	},

	/**
	 * on touchend
	 *
	 * @param {} event
	 * @param {} html
	 * @param {} obj
	 */
	onTouchend: function(event, html, obj) {
		var size = this.getSize();
		this.lastestSize = size;
		this.setResizing(false);
		// prevent to build min boxes while a single tap
		if (size.width < 30 && size.height < 30) {
			this.destroy();
			
		}
	},

	/**
	 * On dragen update box informations
	 * @param {} draggable
	 * @param {} event
	 */
	onDragend: function(draggable, event) {
		this.onDoubleTap();
	},

	/**
	 * On pinch destroy the object
	 *
	 * @param {} e
	 * @param {} el
	 * @param {} obj
	 */
	onPinch: function(e, el, obj) {
		this.removeTouchEvents();
		this.destroy();
		App.setActiveEl(null);
	},
	
	/**
	 * Change opacity of selected element
	 *
	 * @param {} val
	 */
	changeOpacity : function(val) {
		App.getActiveEl().el.dom.style.opacity = val / 10;
	},
	
	/**
	 * Change written text of selected element
	 *
	 * @param {} text
	 */
	changeText : function(text) {
		App.getActiveEl().el.dom.innerText = text;
	},
	
	/**
	 * Change zindex of selected element
	 *
	 * @param {} order
	 */
	changeLayerOrder : function(order) {
		App.getActiveEl().el.dom.style.zIndex = order;
	}
	
});
Ext.reg('App.Ui.TouchBox', App.Ui.TouchBox);