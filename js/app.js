jQuery(function(){
    $(document).ready(function(){
        $(".header__item:nth-child(2)").click(function(){
            // $(".sub-menu__list").toggleClass("_active");
            $(".sub-menu__list").toggle(50);
        });

        $(".like").click(function(){
            var clickId = $(this).attr('id');
            $('#'+clickId+' i').toggleClass("heart_active");
        });
        
        $(".favorite").click(function(){
            var clickId = $(this).attr('id');
            $('#'+clickId+' i').toggleClass("folder_active");
        });
    }); 
});

