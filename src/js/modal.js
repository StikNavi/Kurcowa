  $(document).ready(function () {
    // Open modal with fade-in animation
    $('[data-modal-open]').on('click', function () {
      $('#myModal').modal('show');
      $('#myModal').addClass('fade-in');
    });

    // Close modal
    $('[data-modal-close]').on('click', function () {
      $('#myModal').modal('hide');
      $('#myModal').removeClass('fade-in');
    });
  });
  