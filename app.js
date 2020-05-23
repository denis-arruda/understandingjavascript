
$('#login').click(function(){
    var loginGtr = G$($('#firstname').val(), $('#lastname').val());
    
    loginGtr.setLang($('#lang').val()).HTMLGreeting('#greeting', $('#formal').val() === 'formal').log();
});