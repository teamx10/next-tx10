import { useRef } from 'react';

let globalCounter = 0;

export const useSvgHelper = (svgName: string) => {
  const iconId = useRef(`${globalCounter++}`);
  const id = iconId.current;

  const getId = (name: string) => `${svgName}-${id}-${name}`;
  const getHash = (name: string) => `#${getId(name)}`;
  const getUrl = (name: string) => `url(${getHash(name)})`;

  return {
    getHash,
    getId,
    getUrl,
    id
  };
};
