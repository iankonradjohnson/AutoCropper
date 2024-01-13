export default function ResizeHandle({ onResize, boxRef }) {
  const onMouseDown = (event) => {
      event.stopPropagation(); // Prevent bbox drag functionality

      const startWidth = boxRef.current ? boxRef.current.offsetWidth : 0;
      const startHeight = boxRef.current ? boxRef.current.offsetHeight : 0;
      const startX = event.clientX;
      const startY = event.clientY;

      const onMouseMove = (event) => {
          const newWidth = Math.max(10, startWidth + (event.clientX - startX));
          const newHeight = Math.max(10, startHeight + (event.clientY - startY));
          onResize(newWidth, newHeight);
      };

      const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
  };

  return (
      <div className="resize-handle" onMouseDown={onMouseDown}></div>
  );
}
