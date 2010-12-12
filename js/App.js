Ext.ns('App');
App = Ext.apply(new Ext.util.Observable,{

	/**
	 * UI Container object
	 *
	 * @type object
	 */
	ui: {},
	
	
	/**
	 * Active tool box element
	 *
	 * @type object|null
	 * @TODO we need a better controller mechanism 
	 */
	el: null,

	/**
	 * bootstrap
	 */
	bootstrap: function() {
		this.initUi();
		this.initEventListener();
	},

	/**
	 * initialize the application ui
	 */
	initUi: function() {
		this.ui = new App.Ui();
	},
	
	/**
	 * get selected element 
	 */
	getActiveEl: function() {
		if(this.el == null)
			return false;
		return this.el;
	},
	
	/**
	 * set active element 
	 */
	setActiveEl: function(el) {
		this.el = el;
	},

	/**
	 * initialize event listener
	 */
	initEventListener: function() {
		
	}
});