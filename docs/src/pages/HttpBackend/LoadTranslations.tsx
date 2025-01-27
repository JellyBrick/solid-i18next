import { Example, LanguageSwitcher } from '$/components';
import { Trans, TransProvider } from '@mbarzda/solid-i18next';
import i18next, { InitOptions } from 'i18next';
import { VoidComponent } from 'solid-js';
import HttpBackend from 'i18next-http-backend';

export const HttpBackendLoadTranslations: VoidComponent = () => {
  const instance = i18next.createInstance();
  instance.use(HttpBackend);

  const options: InitOptions = {
    debug: true,
    fallbackLng: 'en',
    backend: { loadPath: '/solid-i18next/locales/{{lng}}/{{ns}}.json' },
  };
  return (
    <TransProvider options={options} instance={instance}>
      <LanguageSwitcher />

      <Example translation={<Trans key="greeting" />}>{'<Trans key="greeting" />'}</Example>

      <Example>
        {`const instance = i18next.createInstance();
        instance.use(HttpBackend);`}
        <br />
        <br />
        {`return (<TransProvider options={{
        debug: true,
    }} instance={instance} children={<App/>} />)`}
      </Example>
    </TransProvider>
  );
};
