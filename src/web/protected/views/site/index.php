<?php
/* @var $this SiteController */
$this->pageTitle=Yii::app()->name;
?>

<div id="imagen">
    <img src="<?php echo Yii::app()->request->baseUrl; ?>/images/landingpage1.png">    
</div>

<!--<div class="landingpage">
   <h1 class='siteIs'>Site is</h1>
   <h1 class='coming'>coming</h1>
   <h1 class='soon'>soon</h1>
</div>-->

<div class="mail-input" id="imagen">
    <input class="inputMail" name="inputMail" id="inputMail" placeholder="Enter yor email"> </input>
    <input type="button" class="botonMail" value="Sign Up"></input>
    <!--<img class="boton" src="<?php echo Yii::app()->request->baseUrl; ?>/images/sign_up_button.png">--> 
</div>
<div class='success'></div>

<div id="imagen">
    <img class="logo" src="<?php echo Yii::app()->request->baseUrl; ?>/images/logo_ribela.png"> 
</div>

