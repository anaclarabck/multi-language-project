// import RootLayout from "@/app/layout";
import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import { NextRouter, withRouter } from "next/router";

type Props = AppProps & {
  router: NextRouter;
};

function App({ Component, pageProps, router }: Props) {
  return (
    <NextIntlClientProvider
      locale={(router.query?.locale as string) ?? "en"}
      messages={pageProps.messages}
      timeZone="America/Recife"
    >
      {/* <RootLayout> */}
      <Component {...pageProps} />
      {/* </RootLayout> */}
    </NextIntlClientProvider>
  );
}

export default withRouter(App);
