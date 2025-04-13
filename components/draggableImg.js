export default function DraggableImg({ id, src, classes }) {
  const className = `absolute z-10 ${classes}`

  return (
    <img draggable='true' id={id} src={src} alt='easter creche item' className={className} />
  )
}