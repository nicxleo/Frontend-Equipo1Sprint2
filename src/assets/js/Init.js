/**
 * Retrieve default settings and apply them to the template
 *
 * @returns void
 */
function setup() { 
    $('body').layout()
    var $layout = $('body').data('lte.layout')  
    $layout.activate();
}