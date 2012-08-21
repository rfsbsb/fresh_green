(function ($) {
  Drupal.behaviors.fresh_green = {
    attach: function(context) {
      $("tr:odd", context).addClass("odd");
      console.log('chamou?')
    }
  }
})(jQuery);
