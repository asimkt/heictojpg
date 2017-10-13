(function($) {
  "use strict"; // Start of use strict

    var label = $('input[type="file"]').parents('.form-group').find('label').text();
    label = (label) ? label : 'Upload File';

    // wrap the file input
    $('input[type="file"]').wrap('<div class="input-file"></div>');
    // display label
    $('input[type="file"]').before('<span class="button">'+label+'</span>');
    // we will display selected file here
    $('input[type="file"]').before('<span class="file-selected"></span>');

    // file input change listener
    $('input[type="file"]').change(function(e){
        // Get 'input[type="file"]' file input value
        var val = $('input[type="file"]').val();

        // Let's only show filename.
        // By default file input value is a fullpath, something like
        // C:\fakepath\Nuriootpa1.jpg depending on your browser.
        var filename = val.replace(/^.*[\\\/]/, '');

        // Display the filename
        $('input[type="file"]').siblings('.file-selected').text('File selected. Click again to change it.');
        $('input[type="file"]').siblings('.button').text(filename);
        $('input[type="submit"]').removeClass('disabled');
    });

  // Open the file browser when our custom button is clicked.
  $('.input-file .button').click(function() {
      $(this).siblings('input[type="file"]').trigger('click');
  });
})(jQuery); // End of use strict
