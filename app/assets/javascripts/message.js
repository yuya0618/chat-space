$(function(){

  function buildPost(message){
    var addImage = (message.image) ? `<img class="lower-message__content__image" src="${message.image}">` : '';
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.text}<br/><br/>
                        ${ addImage }
                      </p>
                    </div>
                </div>`
    return html;
  };
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildPost(message);
      var speed = 200
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},speed,"swing");
    })
    .fail(function(){
      alert('エラー');
    })
    .always(function(){
      $('.form__message') .val('');
      $(".form__submit").removeAttr("disabled");
      });
  })
})