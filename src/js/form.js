const forms = document.querySelectorAll("#subscribe"); //це айдіха форми

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        var subscribe__email = form.querySelector("email").value; // ця шляба лутає емайл з інпута в формі, такіх мона зробити парочку для всіх інпутів
        var subscribe__name = document.getElementById("name").value;    //тіпа
        var subscribe__phone = document.getElementById("phone").value;  //так, хз для чого .value в кінці, в Нєкіта так було, я і не міняв


        var subscribe = `New subscriber Email:<b>${subscribe__email}</b>` // це сообщеніє яке тобі бот шле
    
        var token = "6270391808:AAEeDST2kRZacIxzisJz-GBovp8C8uRHcY0"; //токкен бота шо йому писати буде
        var chat_id = '1728443213'; //айдіха твого человечка
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;
    
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
    
        console.log("Subscribe successfully sent!"); //лог шоб провірити чи норм все робить, хз чо я не видалив його
        form.reset(); // ресет форми, (хтоб міг догадатись)
    }); 
});
