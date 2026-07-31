# FocusMax — Landing Page (Clone)

Clone visual da página https://focusmax.site/usa/bg/dtc/ , recriada em HTML/CSS puro + Tailwind (via CDN), sem nenhuma lógica de cloaking — a página é servida da mesma forma para todos os visitantes.

## Estrutura

```
focusmax-landing/
├── index.html              ← página principal
├── assets/
│   ├── css/main.css        ← variáveis de cor e estilos base
│   ├── js/main.js          ← placeholder dos botões "BUY NOW"
│   └── images/             ← todas as imagens baixadas do site original
└── original.html           ← HTML original (referência, pode apagar)
```

## O que foi removido/alterado do original

- Os links de checkout do BuyGoods (`buygoods.com/secure/checkout.html?account_id=12827...`) foram **removidos** — eles apontavam para a conta do dono original da oferta, então iriam gerar comissão para ele, não para você.
- Os scripts de tracking/conversão do BuyGoods (`account_id=12827`) também foram removidos pelo mesmo motivo.
- Os botões "BUY NOW" da seção de planos (`#checkout`) agora só mostram um alerta de placeholder (`assets/js/main.js`) até você definir a integração real.

## Próximos passos (quando for adicionar o checkout)

1. Se você for afiliado desta oferta: troque os `href="#checkout"` dos botões pelo **seu próprio link de afiliado** (com seu `aff_id`/`account_id`).
2. Se for vender um produto próprio: use o Módulo 4 do agente de backend (Pix/Stripe/etc.) para gerar cobranças reais.
3. Ajuste os links do rodapé (Privacy Policy, Terms, etc.) — hoje apontam para arquivos locais que ainda não existem (`privacy-policy.html`, `terms.html`, ...). Crie essas páginas ou aponte para as suas próprias políticas.

## Como visualizar

Abra `index.html` diretamente no navegador, ou sirva com um servidor local:

```bash
npx serve .
```
