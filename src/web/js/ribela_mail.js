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
            $RIBELA.AJAX.send("GET","/Mail/SaveMail",$('#inputMail').serializeArray());
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
                 if(data==true)
                     $(".success ").css("color", "rgb(83,180,216)").html("the email was successfully saved").fadeIn("slow");
                 else
                     $(".success ").css("color", "#F74B4B").html("sorry, the email was not saved, try again").fadeIn("slow");
             }
        });
    }

    return {init:init,
            send:send
           };
})();
