$('#sidenav-collapser').click(() => {
  $('#sidenav').toggleClass('col-2')
  $('#sidenav').toggleClass('col-1')
  $('#contents').toggleClass('col-10')
  $('#contents').toggleClass('col-11')
  $('#sidenav-collapser i').toggleClass('fa-angle-double-left')
  $('#sidenav-collapser i').toggleClass('fa-angle-double-right')
})