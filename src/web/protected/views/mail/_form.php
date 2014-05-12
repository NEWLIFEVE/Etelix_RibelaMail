<?php
/* @var $this MailController */
/* @var $model Mail */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'mail-form',
	// Please note: When you enable ajax validation, make sure the corresponding
	// controller action is handling ajax validation correctly.
	// There is a call to performAjaxValidation() commented in generated controller code.
	// See class documentation of CActiveForm for details on this.
	'enableAjaxValidation'=>false,
)); ?>
    	<?php echo $form->errorSummary($model); ?>
    <div id="imagen">
    <img src="<?php echo Yii::app()->request->baseUrl; ?>/images/landingpage1.png">    
</div>

<div class="mail-input" id="imagen">
    	<div class="row">
		<?php // echo $form->labelEx($model,'mail'); ?>
		<?php echo $form->textField($model,'mail',array('size'=>50,'maxlength'=>50)); ?>
		<?php echo $form->error($model,'mail'); ?>
	</div>
    
	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>
    <img class="boton" src="<?php echo Yii::app()->request->baseUrl; ?>/images/sign_up_button.png"> 
</div>

<div id="imagen">
    <img class="logo" src="<?php echo Yii::app()->request->baseUrl; ?>/images/logo_ribela.png"> 
</div>


<?php $this->endWidget(); ?>

</div><!-- form -->