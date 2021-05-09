
$( document ).ready(function() {
    
    $('.map-card').click(function(){
        if ($(this).attr('data-active') == 'true')
            $(this).attr('data-active', false);
        else
            $(this).attr('data-active', true);
    });
    
    $('#selectAllBtn').click(function(){
        $('.map-card').attr('data-active', true);
    });

    $('#deselectAllBtn').click(function(){
        $('.map-card').attr('data-active', false);
    });

    $('#findMatch').click(function(){

        var maps = [];
        var names = [];

        $('.map-card[data-active="true"]').each(function() {
            maps.push($(this).attr('id'));
            names.push($(this).find(".map-name").html());
        });

        if (maps.length > 0) 
        {
            var random = Math.floor((Math.random() * maps.length));

            var map = maps[random];
            var name = names[random];

            $('#matchFound').css('background-image', 'linear-gradient(#1d692729, #1d692729), url(img/'+ map +'_thumbnail.jpg)');
            $('#matchFound .found-map-name').html(name);
            $('#matchFound').fadeIn("fast");
        }
    });

    $('#acceptMatch').click(function(){
        $('#matchFound').fadeOut("fast");
    });
    
});