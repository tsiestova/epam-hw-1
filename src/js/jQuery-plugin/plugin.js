import * as $ from 'jquery'

$(function() {
  $.fn.showModal = function(params) {
    function createButtonList(data) {
      return data.map((el, index) => renderButton(el, index)).join('');
    }

    function renderButton(item, index) {
      return `<button class="modal-button" id="${item.title === 'ok' ? 'modal-button_confirm' : 'modal-button_cancel'}" 
          type="button" data-id="${index}"><span>${item.title}</span></button>`;
    }

    const deriveClassByType = (type) => {
      switch (type) {
        case 'error':
          return 'modal-window_error';
        case 'success':
          return 'modal-window_success';
        case '':
          return 'modal-window_info';
        default:
          return 'modal-window_info';
      }
    };

    $('body').append(
        `
        <div id="modal-window_wrap">
         <div id="modal-window">
            <div class="modal-window_inner">
                <button id="modal-button_close">X</button>
                <p class="modal-text">${this.html()}</p>
              
                <div class="modal-button_wrap">
                    ${createButtonList(params.actions)}
                </div>
            </div>
         </div>
        </div>`
    );

    const modal = $('#modal-window');
    const btnCloseModal = $('#modal-button_close');
    const mainContainer = $('#app');
    let winH = $(window).height();
    let winW = $(window).width();

    $(modal).css({
      'position': 'fixed',
      'top': parseInt((winH / 2.5) - (modal.height() / 2), 10),
      'left': parseInt((winW / 2) - (modal.width() / 2), 10),
    });

    modal.addClass(deriveClassByType(params.type));

    const closeModalHandler = (event) => {
      if (modal && modal.length && !modal[0].contains(event.target)) {
        hideModal();
      }
    };

    modal.fadeIn({
      duration: 'slow',
      easing: 'swing',
      done: () => {
        $('body').on('click', closeModalHandler);
      },
    });

    mainContainer.addClass('blur');

    $('body').css('overflow', 'hidden');

    const hideModal = () => {
      modal.fadeOut({
        done: (animation) => {
          $('#modal-window_wrap').remove();
          $('body').off('click', closeModalHandler);
        },
      });

      mainContainer.removeClass('blur');
      $('body').css('overflow', 'auto');
      modal.removeClass(deriveClassByType(params.type));
    };

    $('body').on('keydown', (event) => {
      if ((event.key === 'Escape')) {
        hideModal();
      }
    });

    btnCloseModal.on('click', () => {
      hideModal();
    });


    $('.modal-button').on('click', function() {
      hideModal();

      const index = parseInt($(this).attr('data-id'));
      const el = params.actions.find((el, i) => i === index);
      el.handler();
    });
  };


  $( window ).on( 'hashchange', function( e ) {
    if (window.location.hash === '#blog') {
      setTimeout(() => {
        $('#subscribe-window-content').showModal({
          type: 'info',
          actions: [
            {
              title: 'ok',
              handler: () => alert('Movie removed'),
            },
            {
              title: 'cancel',
            },
          ],
        })
      }, 10000)

    }
  } );

  $(document).on('click', '#button-delete-post', (event) => {
    event.preventDefault();

    $('#delete-window-content').showModal({
      type: 'error',
      actions: [
        {
          title: 'ok',
          handler: () => alert('Movie removed'),
        },
        {
          title: 'cancel',
        },
      ],
    });
  });

});
