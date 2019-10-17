$(function(){
function appendUser(user){
  var html = `<div class="chat-group-user">
                <p class="chat-group-user__name">
                  ${ user.name }
                </p>
                <p class="chat-group-user__btn chat-group-user__btn--add" data-id = ${ user.id } data-name = ${ user.name }>
                  追加
                </p>
              </div>`;
  $('#user-search-result').append(html);
}
function notUser() {
  var html = `<div class="chat-group-user">
                <p class="chat-group-user__name">
                  検索結果はありません。
                </p>
              </div>`;
  $('#user-search-result').append(html);
}

function appendMembers(user_name, user_id) {
  var html = `<div class="chat-group-user">
                <input type = "hidden", value = ${ user_id }, name = "group[user_ids][]", id ="group_user_ids_${user_id}">
                <p class="chat-group-user__name">
                  ${user_name}
                </p>
                <p class="chat-group-user__btn chat-group-user__btn--remove">
                  削除
                </p>
              </div>`;
  $('#chat-group-users').append(html);
}

$(function(){
  $(".chat-group-form").on("input", function() {
    $('#user-search-result').children().remove();
    var user = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { user: user },
      dataType: 'json'
    })
    .done(function(users){
      $('#user-search-result').empty();
        if (users.length !==0){
          users.forEach(function(user){
            var html = appendUser(user);
          })
        }else {
          var html = notUser();
        }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    });
  });
});

$(function(){
  $('#user-search-result').on("click", ".chat-group-user__btn--add",function(){
    var user_name = $(this).data('name');
    var user_id = $(this).data('id');
    var html = appendMembers(user_name, user_id);
    $(this).parent().remove();
  });

  $('#chat-group-users').on("click", ".chat-group-user__btn--remove",function(){
    $(this).parent().remove();
  });
});

});