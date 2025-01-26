import React from "react";
import Document, { DocumentContext, Html, Head, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { RenderPageResult } from "next/dist/shared/lib/utils";

import DeferNextScript from "../utils/DeferNextScript";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      } as RenderPageResult;
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/NAMUFont/NAMU-PRO.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&family=Source+Code+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@500;600&family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preconnect"
            href="https://code-landing-2022-stg.herokuapp.com"
          />
        </Head>
        <body>
          <Main />
          <DeferNextScript />
        </body>
      </Html>
    );
  }
}
