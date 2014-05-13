/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function()
{
    $RIBELA.UI.init();
});

$RIBELA= {};

$RIBELA.UI = (function(){
    function init()
    {
        _clickElement();
    }
    
    var mail = null;
    
    function _clickElement()
    {
        $("input.botonMail").on("click", function()
        {
            $(".success ").fadeOut("fast");
            if($("#inputMail").val()==""){
                $(".success ").css("color", "#F74B4B").html("Please provide an email").fadeIn("slow");
            }else{
                if ( !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($("#inputMail").val()) )
                    $(".success ").css("color", "#F74B4B").html("The entered email is not correct").fadeIn("slow");
                else
                    $RIBELA.AJAX.send("GET","/Mail/SaveMail",$('#inputMail').serializeArray());
            }
        });
    }
    return {init:init 
           };
    
})();

$RIBELA.AJAX=(function()
{
    function init()
    {
    }
    function send(type,action,form)
    {
        $.ajax({
             type: type,
             url: action,
             data: form,
             success: function(data)
             {
                 switch(data){
                    case '0':
                        $(".success ").css("color", "#F74B4B").html("Sorry, the email was not saved, try again").fadeIn("slow");
                    case '1':
                        $(".success ").css("color", "rgb(83,180,216)").html("The email was successfully saved").fadeIn("slow");
                    case '2':
                        $(".success ").css("color", "#F74B4B").html("Sorry, the email is already registered").fadeIn("slow");
                 }        
             }
        });
    }

    return {init:init,
            send:send
           };
})();
