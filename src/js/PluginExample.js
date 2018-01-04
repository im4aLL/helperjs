const pluginName = 'defaultPluginName';
const defaultValues = {
    propertyName: "value"
};

class Plugin {
    constructor(element, options) {
        this.element = element;
        this.options = $.extend({}, defaultValues, options) ;

        this._defaults = defaultValues;
        this._name = pluginName;

        this.init();
    }

    init() {
        console.log(this._defaults);
    }
}

class Helper {
    constructor() {
        $.fn[pluginName] = function ( options ) {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName,
                    new Plugin( this, options ));
                }
            });
        }
    }
}

export default new Helper();
