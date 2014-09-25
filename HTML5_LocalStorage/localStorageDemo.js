var LocalStorageDemo = function(){

    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var nickname = document.getElementById('nickname');
    var emailAddress = document.getElementById('emailAddress');
    var saveForLaterButton = document.getElementById('saveForLater');
    var retrieveFormButton = document.getElementById('retrieveForm');

    function init(){
        if(isLocalStorageSupported()){
            console.log("Local Storage Supported!");
            setEventHandlers();
        }else{
            saveForLaterButton.style.display = 'none';
        }
    }

    function saveFormFields(){
        var formObject = {
            firstName: firstName.value,
            lastName: lastName.value,
            nickname: nickname.value,
            emailAddress: emailAddress.value
        };
        localStorage.setItem("savedForm", JSON.stringify(formObject))
    }

    function retrieveFormFields(){
        var savedForm = JSON.parse(localStorage.getItem("savedForm"));
        if(savedForm){
            firstName.value = savedForm.firstName;
            lastName.value = savedForm.lastName;
            nickname.value = savedForm.nickname;
            emailAddress.value = savedForm.emailAddress;
        }else{
            alert('You do not have any saved forms!');
        }
    }

    function isLocalStorageSupported() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    function setEventHandlers(){
        saveForLaterButton.onclick = function(){
            saveFormFields();
            clearForm();
        };

        retrieveFormButton.onclick = function(){
          retrieveFormFields();
        };
    }

    function clearForm(){
        firstName.value = '';
        lastName.value = '';
        nickname.value = '';
        emailAddress.value = '';
    }

    init();
}();