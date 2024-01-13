import React, { useState, useRef } from 'react';
import ResizeHandle from './ResizeHandle'; // Import ResizeHandle

export default function BoundingBox(props) {
    const [position, setPosition] = useState({ left: props.x, top: props.y });
    const [size, setSize] = useState({ width: props.width, height: props.height });
    const bboxRef = useRef(null); // Ref for the bounding box

    const onMouseDown = (event) => {
        event.preventDefault();
        const startX = event.clientX - position.left;
        const startY = event.clientY - position.top;

        const onMouseMove = (event) => {
            const x = event.clientX - startX;
            const y = event.clientY - startY;
            setPosition({ left: x, top: y });
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const onResize = (width, height) => {
        setSize({ width, height });
    };

    return (
        <div
            ref={bboxRef}
            className="bbox"
            style={{
                left: `${position.left}px`,
                top: `${position.top}px`,
                width: `${size.width}px`,
                height: `${size.height}px`,
            }}
            onMouseDown={onMouseDown}
        >
            <ResizeHandle onResize={onResize} boxRef={bboxRef} />
        </div>
    );
}
