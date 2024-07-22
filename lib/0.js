// Copyright tori3-dev
// Load through 'defer'

'use strict';

(()=>{
  let f=document.createDocumentFragment(),
      h=document.head.innerHTML,
      t=document.getElementsByTagName('title')[0].textContent;
      document.head.innerHTML=`
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>${t}</title>
        <meta name="description" content="Tori3の開発ドキュメント">
        <meta property="og:title" content="${t} - Tori3">
        <meta property="og:description" content="Tori3の開発ドキュメント">
        <meta property="og:url" content="${location.href}">
        <meta property="og:image" content="./lib/img/og.png">
        <link href="./lib/0.css" rel="stylesheet">
      `
})()