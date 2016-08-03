$('#orb').click( function() {
  if ($(this).hasClass('sun')) {
            $(this).removeClass('sun').addClass('moon');
        }else {
            $(this).removeClass('moon').addClass('sun');
        }
  if ($('body').hasClass('light')) {
    $('body').removeClass('light').addClass('night');
}
else {
    $('body').removeClass('night').addClass('light');
}
  if ($('#moonspot1').hasClass('visible')) {
    $('#moonspot1').removeClass('visible');
} else {
    $('#moonspot1').addClass('visible');
}
  
});