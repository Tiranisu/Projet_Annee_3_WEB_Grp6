import {ajaxRequest} from './tool.js';

function checkMail(infos){
  if(infos == true){
      document.getElementById('validmail').style.display = 'block';
      document.getElementById('unvalidmail').style.display = 'none';
  }
  else{
    document.getElementById('validmail').style.display = 'none';
    document.getElementById('unvalidmail').style.display = 'block';
  }

  if(document.getElementById('mail').value == ""){
      document.getElementById('validmail').style.display = 'none';
      document.getElementById('unvalidmail').style.display = 'none';
  }
}


// check if the email is in the database
$("#mail").change(function(){
  mail = document.getElementById('mail').value;
  ajaxRequest('GET', `../php/connectRequest.php/register?mail=${mail}`, checkMail);
})