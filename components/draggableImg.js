'use client';

export default function DraggableImg({ id, src, classes }) {
  const className = `absolute z-10 ${classes}`;

  const resetZ = () => {
    const elements = document.querySelectorAll('img');
    for (let i = 0, length1 = elements.length; i < length1; i++) {
      elements[i].style.zIndex = 5;
    }
  }

  const handleDragStart = (e) => {
    whichArt = e.target; //is the target I have clicked on
    //lets set the position of the element as I clicked
    myX = e.offsetX === undefined ? e.layerX : e.offsetX;
    myY = e.offsetY === undefined ? e.layerY : e.offsetY;
    resetZ();
    //now set the element I clicked on to be top on other elements
    whichArt.style.zIndex = 10;
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    //now lets position the elements that I moved into it's new positions, to calculate that
    whichArt.style.left = e.pageX - myX + 'px';
    whichArt.style.top = e.pageY - myY + 'px';
  }

  const handleTouchStart = (e) => {
    e.preventDefault(); //preventing the page scrolling in smaller devices
    const whichArt = e.target;
    const touch = e.touches[0];
    const moveoffsetX = whichArt.offsetLeft - touch.pageX;
    const moveoffsetY = whichArt.offsetTop - touch.pageY;
    resetZ();
    whichArt.style.zIndex = 10;

    whichArt.addEventListener('touchmove', function () {
      const positionX = touch.pageX + moveoffsetX;
      const positionY = touch.pageY + moveoffsetY;
      whichArt.style.left = positionX + 'px';
      whichArt.style.top = positionY + 'px';
    }, false);
  }

  return (
    <img draggable='true' id={id} src={src} alt='easter creche item' className={className} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} onTouchStart={handleTouchStart} />
  )
}