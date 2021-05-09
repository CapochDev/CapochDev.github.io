
$( document ).ready(function() {

    var cookiesMaps = Cookies.get('active_maps');

    if (cookiesMaps != null)
    {
        var activeMapIds = cookiesMaps.split(",");

        if(activeMapIds != "")
            for(i=0; i<activeMapIds.length; i++)
                $('#'+activeMapIds[i]).attr('data-active', false);
    }
    
    $('.map-card').click(function(){
        if ($(this).attr('data-active') == 'true')
            $(this).attr('data-active', false);
        else
            $(this).attr('data-active', true);

        updateCookies();
    });
    
    $('#selectAllBtn').click(function(){
        $('.map-card').attr('data-active', true);
        updateCookies();
    });

    $('#deselectAllBtn').click(function(){
        $('.map-card').attr('data-active', false);
        updateCookies();
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


function updateCookies() {
    var ids = [];
    $('.map-card[data-active="false"]').each(function() {
        ids.push($(this).attr('id'));
    });
    Cookies.set('active_maps', ids);
}


