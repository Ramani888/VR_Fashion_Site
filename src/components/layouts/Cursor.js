import React, { useEffect } from 'react';
import $ from 'jquery';

const Cursor = () => {
    useEffect(() => {
        function cursor() {
            $(document).on('mousemove', function (e) {
                var xPos = e.pageX;
                var yPos = e.pageY;
                $('.circle-out').css({
                    'top': yPos,
                    'left': xPos
                });
            });
        }
        cursor();

        // Clean up event listener on component unmount
        return () => {
            $(document).off('mousemove');
        };
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div className="circle-out"></div>
    );
};

export default Cursor;
