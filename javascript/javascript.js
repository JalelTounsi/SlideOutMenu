$(function()
{
    $('#menu > li').hover
    (
        function ()
        {
            var $this = $(this);
            $('a',$this).stop(true,true).animate({
                    'bottom':'-15px'
                }, 300);
        },
        function ()
        {
            var $this = $(this);
            $('a',$this).stop(true,true).animate({
                    'bottom':'-95px'
                }, 300);
        }
    );
});
