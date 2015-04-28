$('table')
  .hover(function () {
    $(this).css("border", "2px dashed red");
  }, function () {
    $(this).css("border", "");
  })

  .click(function () {
    $(this).css("border", "");

    $(this).attr('id', 'tblExport');
    var uri = $(this).battatech_excelexport({
      containerid: "tblExport",
      datatype: "table",
      encoding: "UTF-8",
      returnUri: true
    });
    $(this).removeAttr('id');

    var filename = $('title').text() + '.xls';

    var a = $('<a id="btnExport" href="' + uri + '" download="' + filename + '" target="_blank">Export</a>');

    // no need to attach
    //$('body').append(a).trigger('click').detach();
    a[0].click();
  });
