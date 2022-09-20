import { nanoid } from 'nanoid';
import { component, h, templateFn } from 'spred-dom';
import { buttonLink } from '../../ui/button/button';

const StartLink = component(() => {
  const url = '#host/' + nanoid();

  return h(() =>
    buttonLink({
      href: () => url,
      text: () => 'Создать Комнату',
    })
  );
});

const startLink = templateFn(StartLink);

export { StartLink, startLink };
