$(document).ready(function(){
    load_json_data('menu');
    function load_json_data(id, name)
    {
        var html_code = '';
        $.getJSON('menu_items.json', function(data){
        html_code += '<option value="">Select '+id+'</option>';
        $.each(data,function(key,value){
            if(id == 'menu')
            {
                html_code += '<option value="'+value.id+'">'+value.name+'</option';
            }
        });
        $('#'+id).html(html_code);
        });
    }
});