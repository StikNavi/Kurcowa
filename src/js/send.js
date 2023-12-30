  $(document).ready(function () {
    $("#submit").on("click", function () {
      // Отримайте значення полів форми
      var name = $("input[name='Name']").val();
      var email = $("input[name='Email']").val();
      var phone = $("input[name='Phone']").val();

      // Ваш сервер електронної пошти та дані для нього
      var emailServer = "ваш_сервер_електронної_пошти";
      var emailUsername = "ваш_логін";
      var emailPassword = "ваш_пароль";

      // Створіть об'єкт з даними для відправки на сервер
      var data = {
        name: name,
        email: email,
        password: password,
      };

      // Використайте AJAX для відправки даних на сервер
      $.ajax({
        type: "POST",
        url: "ваш_сервер_електронної_пошти_скрипт.php", // Замініть це на шлях до вашого обробника форми на сервері
        data: data,
        success: function () {
          // Успішна відправка
          alert("Повідомлення відправлено успішно!");
        },
        error: function () {
          // Помилка відправлення
          alert("Помилка відправлення повідомлення.");
        },
      });
    });
  });
