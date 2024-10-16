window.$(document).ready(function() {

    let ClothingStates = null;

    function ChnageScale(event) {
        event.preventDefault();
        window.$.post(`https://${GetParentResourceName()}/changeScale`, JSON.stringify({
            scale: event.originalEvent.deltaY * 0.01
        }));
    }

    function HandleRotate(event) {
        window.$.post(`https://${GetParentResourceName()}/changeRotation`, JSON.stringify({
            side: event.movementX > 0 ? 'right' : 'left'
        }));
    }

    function HandleHeight(event) {
        window.$.post(`https://${GetParentResourceName()}/changeHeight`, JSON.stringify({
            direction: event.movementY > 0 ? 'down' : 'up'
        }));
    }

    function ChangeClothesState(clothing) {
        window.$.post(`https://${GetParentResourceName()}/changeClothesState`, JSON.stringify({
            clothing: clothing
        }));
    }

    window.addEventListener('message', event => {
        switch (event.data.type) {
            case 'OpenMenu':
                window.$('.top').css( { 'left': '-500px' } ).animate( { 'left': '0' }, {
                    duration: 200
                });
                window.$('.top').css('display', 'flex');
                window.$('.clothing').css('position', 'relative');
                window.$('.clothing').css( { 'left': '-500px' } ).animate( { 'left': '0' }, {
                    duration: 200,
                    complete: function() {
                        window.$('.clothing').css('position', 'initial');
                    }
                });
                window.$('.clothing').css('display', 'flex');
                window.$('.buttom').css( { 'right': '-500px' } ).animate( { 'right': '0' }, {
                    duration: 200
                });
                window.$('.buttom').css('display', 'flex');
                ClothingStates = event.data.clothingStates;
                ClothingStates['mask'] ? window.$('#maskhex').addClass('active') : window.$('#maskhex').removeClass('active');
                ClothingStates['hat'] ? window.$('#hathex').addClass('active') : window.$('#hathex').removeClass('active');
                ClothingStates['glasses'] ? window.$('#glasseshex').addClass('active') : window.$('#glasseshex').removeClass('active');
                ClothingStates['shirt'] ? window.$('#shirthex').addClass('active') : window.$('#shirthex').removeClass('active');
                ClothingStates['undershirt'] ? window.$('#undershirthex').addClass('active') : window.$('#undershirthex').removeClass('active');
                ClothingStates['vest'] ? window.$('#vesthex').addClass('active') : window.$('#vesthex').removeClass('active');
                ClothingStates['chain'] ? window.$('#chainhex').addClass('active') : window.$('#chainhex').removeClass('active');
                ClothingStates['watch'] ? window.$('#watchhex').addClass('active') : window.$('#watchhex').removeClass('active');
                ClothingStates['bracelet'] ? window.$('#bracelethex').addClass('active') : window.$('#bracelethex').removeClass('active');
                ClothingStates['pants'] ? window.$('#pantshex').addClass('active') : window.$('#pantshex').removeClass('active');
                ClothingStates['bag'] ? window.$('#baghex').addClass('active') : window.$('#baghex').removeClass('active');
                ClothingStates['shoes'] ? window.$('#shoeshex').addClass('active') : window.$('#shoeshex').removeClass('active');
                break;
            case 'UpdateStates':
                ClothingStates = event.data.clothingStates;
                ClothingStates['mask'] ? window.$('#maskhex').addClass('active') : window.$('#maskhex').removeClass('active');
                ClothingStates['hat'] ? window.$('#hathex').addClass('active') : window.$('#hathex').removeClass('active');
                ClothingStates['glasses'] ? window.$('#glasseshex').addClass('active') : window.$('#glasseshex').removeClass('active');
                ClothingStates['shirt'] ? window.$('#shirthex').addClass('active') : window.$('#shirthex').removeClass('active');
                ClothingStates['undershirt'] ? window.$('#undershirthex').addClass('active') : window.$('#undershirthex').removeClass('active');
                ClothingStates['vest'] ? window.$('#vesthex').addClass('active') : window.$('#vesthex').removeClass('active');
                ClothingStates['chain'] ? window.$('#chainhex').addClass('active') : window.$('#chainhex').removeClass('active');
                ClothingStates['watch'] ? window.$('#watchhex').addClass('active') : window.$('#watchhex').removeClass('active');
                ClothingStates['bracelet'] ? window.$('#bracelethex').addClass('active') : window.$('#bracelethex').removeClass('active');
                ClothingStates['pants'] ? window.$('#pantshex').addClass('active') : window.$('#pantshex').removeClass('active');
                ClothingStates['bag'] ? window.$('#baghex').addClass('active') : window.$('#baghex').removeClass('active');
                ClothingStates['shoes'] ? window.$('#shoeshex').addClass('active') : window.$('#shoeshex').removeClass('active');
                break;
        }
    });

    window.$(document).keydown(function(e) {
        if (e.keyCode == 27) {
            window.$('.top').css( { 'left': '0' } ).animate( { 'left': '-500px' }, {
                duration: 200,
                complete: function() {
                    ClothingStates = null;
                    window.$('.top').css('display', 'none');
                }
            });
            window.$('.clothing').css('position', 'relative');
            window.$('.clothing').css( { 'left': '0' } ).animate( { 'left': '-500px' }, {
                duration: 200,
                complete: function() {
                    window.$('.clothing').css('position', 'initial');
                    ClothingStates = null;
                    window.$('.clothing').css('display', 'none');
                }
            });
            window.$('.buttom').css( { 'right': '0' } ).animate( { 'right': '-500px' }, {
                duration: 200,
                complete: function() {
                    ClothingStates = null;
                    window.$('.buttom').css('display', 'none');
                }
            });
            window.$.post(`https://${GetParentResourceName()}/close`, JSON.stringify({ }));
        }
    });

    document.body.onmousedown = function(event) {
        if (event.button === 0) {
            document.body.addEventListener('mousemove', HandleRotate);
        } else {
            document.body.addEventListener('mousemove', HandleHeight);
        }
    }

    document.body.onmouseup = function(event) {
        if (event.button === 0) {
            document.body.removeEventListener('mousemove', HandleRotate);
        } else {
            document.body.removeEventListener('mousemove', HandleHeight);
        }
    }

    window.$('.wrapper').on('wheel', function(event) {
        ChnageScale(event);
    });

    ['mask', 'hat', 'glasses', 'shirt', 'undershirt', 'vest', 'chain', 'watch', 'bracelet', 'pants', 'bag', 'shoes'].forEach(element => {
        window.$(`#${element}`).on('click', function() {
            ChangeClothesState(element);
        })
    });

})