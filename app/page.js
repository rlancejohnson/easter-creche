import DraggableImg from '@/components/draggableImg';

export default function Home() {
  const images = [
    {
      id: 'cave',
      src: 'cave.svg',
      classes: ''
    },
    {
      id: 'cavedoor',
      src: 'cavedoor.svg',
      classes: ''
    },
    {
      id: 'jesus',
      src: 'jesus.svg',
      classes: ''
    },
    {
      id: 'ladyinred',
      src: 'ladyinred.svg',
      classes: ''
    },
    {
      id: 'ladyinwhite',
      src: 'ladyinwhite.svg',
      classes: ''
    },
    {
      id: 'leaves',
      src: 'leaves.svg',
      classes: ''
    },
    {
      id: 'oldwoman',
      src: 'oldwoman.svg',
      classes: ''
    },
    {
      id: 'tree',
      src: 'tree.svg',
      classes: ''
    }
  ];

  return (
    <div className=''>
      {images.map(({ id, src, classes }) => (
        <DraggableImg key={id} id={id} src={`/easter_pieces/${src}`} classes={classes} />
      ))}
    </div>
  );
}
