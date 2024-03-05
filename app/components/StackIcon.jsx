import reactIcon from '../../public/icons/react.svg';
import nodeIcon from '../../public/icons/nodejs.svg';
import tsIcon from '../../public/icons/typescript.svg';
import sassIcon from '../../public/icons/sass.svg';
import Image from 'next/image';

export default function StackIcon({ stackName }) {
  const displayLogo = (stack) => {
    let icon;
    switch (stack) {
      case 'React':
        icon = reactIcon;
        break;
      case 'Node.js':
        icon = nodeIcon;
        break;
      case 'TypeScript':
        icon = tsIcon;
        break;
      case 'Sass':
        icon = sassIcon;
        break;
      default:
        icon;
        break;
    }

    return icon;
  };

  const logo = displayLogo(stackName);
  const stackIcon = 28;

  return (
    <div className='stack'>
      <Image src={logo} alt={stackName} width={stackIcon} height={stackIcon} />
      <p>{stackName}</p>
    </div>
  );
}
