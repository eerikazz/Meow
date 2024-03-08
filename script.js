$(document).ready(function() {
    let cats = [];
    let index = 0;
    let PREFETCH_THRESHOLD = 5;
    let BATCH_SIZE = 10;
    let loadingGifUrl = 'inc/paws.gif'; 
    let height = `${window.innerHeight}px`;

    $('body').css('height', height);

    $(window).on('resize', function() {
        height = `${window.innerHeight}px`;
        $('body').css('height', height);
    });

    function getImg() {
        $.get('https://catfact.ninja/fact?max_length=128', function(data) {
            $('#fact').html(data.fact);
        });

        if (cats[index]) {
            $('img').attr('src', cats[index].url);
        }
    }

    function fetchTheCats() {
        if (cats.length === 0) {
            $('img').attr('src', loadingGifUrl); // Display loading gif if cats array is empty
        }
        $.get('https://api.thecatapi.com/v1/images/search?limit=' + BATCH_SIZE, function(data) {
            cats = cats.slice(index).concat(data); // Remove viewed images and add new ones
            index = 0; // Reset index as we've sliced the array
            getImg();
        });
    }

    function like() {
        var img = $('img');
        var imgOffset = img.offset();
        var imgWidth = img.width();
        var imgHeight = img.height();

        var svg = $(`<svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7636 27.5781C15.3693 27.916 16.0981 27.8973 16.7002 27.5532C20.7568 25.2348 27.8059 19.898 30.5744 12.9657C34.6378 3.93977 25.0969 -3.2653 18.5028 1.91684C17.815 2.45741 16.9502 3.0761 16.355 3.66216C16.0859 3.92714 15.6116 3.95416 15.3323 3.69999C14.5498 2.98805 13.3268 2.07479 12.5415 1.54343C6.91996 -2.2599 -3.30858 2.75354 1.05454 13.4533C2.65287 18.2562 10.2695 25.07 14.7636 27.5781Z" fill="url(#paint0_radial_2_130)"/>
        <path d="M14.7636 27.5781C15.3693 27.916 16.0981 27.8973 16.7002 27.5532C20.7568 25.2348 27.8059 19.898 30.5744 12.9657C34.6378 3.93977 25.0969 -3.2653 18.5028 1.91684C17.815 2.45741 16.9502 3.0761 16.355 3.66216C16.0859 3.92714 15.6116 3.95416 15.3323 3.69999C14.5498 2.98805 13.3268 2.07479 12.5415 1.54343C6.91996 -2.2599 -3.30858 2.75354 1.05454 13.4533C2.65287 18.2562 10.2695 25.07 14.7636 27.5781Z" fill="url(#paint1_radial_2_130)"/>
        <path d="M14.7636 27.5781C15.3693 27.916 16.0981 27.8973 16.7002 27.5532C20.7568 25.2348 27.8059 19.898 30.5744 12.9657C34.6378 3.93977 25.0969 -3.2653 18.5028 1.91684C17.815 2.45741 16.9502 3.0761 16.355 3.66216C16.0859 3.92714 15.6116 3.95416 15.3323 3.69999C14.5498 2.98805 13.3268 2.07479 12.5415 1.54343C6.91996 -2.2599 -3.30858 2.75354 1.05454 13.4533C2.65287 18.2562 10.2695 25.07 14.7636 27.5781Z" fill="url(#paint2_radial_2_130)"/>
        <path d="M14.7636 27.5781C15.3693 27.916 16.0981 27.8973 16.7002 27.5532C20.7568 25.2348 27.8059 19.898 30.5744 12.9657C34.6378 3.93977 25.0969 -3.2653 18.5028 1.91684C17.815 2.45741 16.9502 3.0761 16.355 3.66216C16.0859 3.92714 15.6116 3.95416 15.3323 3.69999C14.5498 2.98805 13.3268 2.07479 12.5415 1.54343C6.91996 -2.2599 -3.30858 2.75354 1.05454 13.4533C2.65287 18.2562 10.2695 25.07 14.7636 27.5781Z" fill="url(#paint3_radial_2_130)"/>
        <path d="M14.7636 27.5781C15.3693 27.916 16.0981 27.8973 16.7002 27.5532C20.7568 25.2348 27.8059 19.898 30.5744 12.9657C34.6378 3.93977 25.0969 -3.2653 18.5028 1.91684C17.815 2.45741 16.9502 3.0761 16.355 3.66216C16.0859 3.92714 15.6116 3.95416 15.3323 3.69999C14.5498 2.98805 13.3268 2.07479 12.5415 1.54343C6.91996 -2.2599 -3.30858 2.75354 1.05454 13.4533C2.65287 18.2562 10.2695 25.07 14.7636 27.5781Z" fill="url(#paint4_linear_2_130)"/>
        <path d="M14.7636 27.5781C15.3693 27.916 16.0981 27.8973 16.7002 27.5532C20.7568 25.2348 27.8059 19.898 30.5744 12.9657C34.6378 3.93977 25.0969 -3.2653 18.5028 1.91684C17.815 2.45741 16.9502 3.0761 16.355 3.66216C16.0859 3.92714 15.6116 3.95416 15.3323 3.69999C14.5498 2.98805 13.3268 2.07479 12.5415 1.54343C6.91996 -2.2599 -3.30858 2.75354 1.05454 13.4533C2.65287 18.2562 10.2695 25.07 14.7636 27.5781Z" fill="url(#paint5_linear_2_130)"/>
        <path d="M14.7636 27.5781C15.3693 27.916 16.0981 27.8973 16.7002 27.5532C20.7568 25.2348 27.8059 19.898 30.5744 12.9657C34.6378 3.93977 25.0969 -3.2653 18.5028 1.91684C17.815 2.45741 16.9502 3.0761 16.355 3.66216C16.0859 3.92714 15.6116 3.95416 15.3323 3.69999C14.5498 2.98805 13.3268 2.07479 12.5415 1.54343C6.91996 -2.2599 -3.30858 2.75354 1.05454 13.4533C2.65287 18.2562 10.2695 25.07 14.7636 27.5781Z" fill="url(#paint6_radial_2_130)" fill-opacity="0.6"/>
        <path d="M15.5464 6.45116V14.1755C15.5464 15.1998 16.7868 15.6854 17.4254 14.8844C19.4011 12.4062 20.9946 9.3926 19.2163 6.93096C18.5345 5.9872 17.2282 5.38255 16.1609 5.57492C15.7616 5.64688 15.5464 6.04539 15.5464 6.45116Z" fill="#FA1C56"/>
        <path d="M28.3781 10.4019C30.3784 8.45735 30.6927 5.53614 29.0801 3.87724C27.4674 2.21834 24.5385 2.44993 22.5381 4.39453C20.5378 6.33912 20.2235 9.26033 21.8361 10.9192C23.4488 12.5781 26.3777 12.3465 28.3781 10.4019Z" fill="url(#paint7_radial_2_130)"/>
        <path d="M24.046 1.78558C25.0961 1.91758 25.9698 1.84573 25.9975 1.6251C26.0252 1.40447 25.1965 1.1186 24.1465 0.9866C23.0965 0.854598 22.2228 0.926447 22.195 1.14708C22.1673 1.36771 22.996 1.65358 24.046 1.78558Z" fill="#FF7383"/>
        <path d="M8.16884 1.65334C9.11833 1.64179 9.88651 1.50601 9.88461 1.35007C9.88271 1.19413 9.11146 1.07708 8.16196 1.08864C7.21247 1.10019 6.44429 1.23597 6.44618 1.39191C6.44808 1.54785 7.21934 1.6649 8.16884 1.65334Z" fill="#FF93BA" fill-opacity="0.5"/>
        <path d="M14.3426 5.79582L14.6965 17.4004C6.91294 9.82915 5.41622 4.51226 8.39883 3.31924C11.2293 2.18709 13.4936 4.02684 14.3426 5.79582Z" fill="url(#paint8_radial_2_130)"/>
        <path d="M13.7767 5.11667C12.8257 4.98081 12.5314 4.19209 12.5031 3.8147C13.0465 4.38077 13.5786 4.42795 13.7767 4.38077V5.11667Z" fill="#FF7383"/>
        <defs>
        <radialGradient id="paint0_radial_2_130" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.5174 0.895678) rotate(90) scale(26.0219 27.6269)">
        <stop stop-color="#FC0000"/>
        <stop offset="0.527969" stop-color="#FF3B79"/>
        <stop offset="1" stop-color="#F724B3"/>
        </radialGradient>
        <radialGradient id="paint1_radial_2_130" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.6034 7.3823) rotate(134.402) scale(24.0748 45.0945)">
        <stop offset="0.797874" stop-color="#C82092" stop-opacity="0"/>
        <stop offset="0.908039" stop-color="#C82092"/>
        </radialGradient>
        <radialGradient id="paint2_radial_2_130" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.1751 14.6569) rotate(-158.663) scale(25.7553 36.4088)">
        <stop offset="0.40984" stop-color="#B91D43" stop-opacity="0"/>
        <stop offset="0.833898" stop-color="#B91D43"/>
        </radialGradient>
        <radialGradient id="paint3_radial_2_130" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.1522 10.1588) rotate(90) scale(22.4157)">
        <stop offset="0.671096" stop-color="#FF7AF2" stop-opacity="0"/>
        <stop offset="0.933555" stop-color="#FFBCE6"/>
        </radialGradient>
        <linearGradient id="paint4_linear_2_130" x1="17.6262" y1="12.7827" x2="26.6973" y2="23.5782" gradientUnits="userSpaceOnUse">
        <stop offset="0.694491" stop-color="#FF7AF2" stop-opacity="0"/>
        <stop offset="0.933555" stop-color="#FFBCE6"/>
        </linearGradient>
        <linearGradient id="paint5_linear_2_130" x1="16.5016" y1="13.2325" x2="5.85603" y2="25.2275" gradientUnits="userSpaceOnUse">
        <stop offset="0.694491" stop-color="#FF7AF2" stop-opacity="0"/>
        <stop offset="0.933555" stop-color="#FFBCE6"/>
        </linearGradient>
        <radialGradient id="paint6_radial_2_130" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.3074 9.11744) rotate(164.618) scale(19.4895 20.5827)">
        <stop offset="0.802083" stop-color="#FF73A6" stop-opacity="0"/>
        <stop offset="1" stop-color="#FF93BA"/>
        </radialGradient>
        <radialGradient id="paint7_radial_2_130" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.977 3.77941) rotate(128.737) scale(8.25493 10.9769)">
        <stop stop-color="#FF7383"/>
        <stop offset="1" stop-color="#FF7383" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint8_radial_2_130" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.0409 10.1857) rotate(-135.591) scale(14.3626 25.496)">
        <stop stop-color="#FF6274"/>
        <stop offset="1" stop-color="#FF6274" stop-opacity="0"/>
        </radialGradient>
        </defs>
        </svg>`);
        
        var randomX = imgOffset.left + Math.random() * imgWidth - 16;
        var bottomY = imgOffset.top + imgHeight - 28;

        svg.css({ position: 'absolute', top: bottomY, left: randomX, opacity: 1 }).appendTo('body');

        svg.animate({
            top: imgOffset.top + imgHeight * 0.25,
            opacity: 0
        }, 1000, function() {
            svg.remove();
        });
    }

    $('#next').click(function() {
        index += 1;

        if (index >= cats.length) {
            index = 0; // Safeguard in case of array bounds
        }

        if (cats.length - index === PREFETCH_THRESHOLD) {
            fetchTheCats();
        } else {
            getImg();
        }
    });

    $('#like').click(function(){
        like();
    });

    fetchTheCats();
});
