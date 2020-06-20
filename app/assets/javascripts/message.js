$(function(){
     function buildHTML(message){
       if ( message.image ) {
         var html =
         `<div class="post-main__messages__message">
            <div class="post-main__messages__message__info">
              <div class="post-main__messages__message__user">
                ${message.user_nickname}
              </div>
              <div class="post-main__messages__message__date">
                ${message.created_at}
              </div>
            </div>
            <div class="lower-message">
              <p class=""lower-message__text">
                ${message.text}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
         return html;
       } else {
         var html =
         `<div class="post-main__messages__message">
            <div class="post-main__messages__message__info">
              <div class="post-main__messages__message__user">
                ${message.user_nickname}
              </div>
              <div class="post-main__messages__message__date">
                ${message.created_at}
              </div>
            </div>
            <div class="lower-message">
              <p class=""lower-message__text">
                ${message.text}
              </p>
            </div>
          </div>`
         return html;
       };
     }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url:  url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.post-main__messages').append(html);
        $('form')[0].reset();
        $('.post-main__messages').animate({ scrollTop: $('.post-main__messages')[0].scrollHeight });
        $('.form__submit').prop('disabled', false);
      })
      .fail(function(){
           alert("メッセージ送信に失敗しました");
      });
  })
});