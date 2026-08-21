# Viação Diamante — Landing Page

Landing page estática (HTML/CSS/JS puro, sem build step) para a Viação Diamante.

## Estrutura

```
index.html
assets/
  css/style.css
  js/main.js
  img/
    logo-pt.png              # logo oficial (texto preto) — usada no tema claro
    logo-bc.png               # logo oficial (texto branco) — usada no tema escuro e no rodapé
    icon-diamante.png         # marca (asa/facetas rosa) isolada da logo oficial
    favicon-diamante.png      # favicon gerado a partir da marca
    pattern-diamantes.png     # textura oficial de diamantes, usada como divisor decorativo
    hero-bg.svg               # fundo abstrato do topo — tema claro
    hero-bg-dark.svg          # fundo abstrato do topo — tema escuro
    bus-illustration.svg      # ilustração do ônibus na seção "Sobre" — tema claro
    bus-illustration-dark.svg # ilustração do ônibus na seção "Sobre" — tema escuro
    whatsapp-icon.svg         # ícone do botão flutuante
```

## Como rodar localmente

Qualquer servidor estático funciona, por exemplo:

```
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Modo escuro

O botão de sol/lua no cabeçalho alterna entre os temas. A preferência fica
salva em `localStorage` e, na primeira visita, respeita o tema do sistema
operacional. O tema escuro usa preto como cor de fundo, mantendo o rosa
`#ec008b` como destaque; logo, fundo do hero e ilustração do ônibus trocam
automaticamente para as versões em preto/branco.

## Logo e identidade visual

As logos oficiais (`logo-pt.png`, `logo-bc.png`, `icon-diamante.png`,
`favicon-diamante.png`) e a textura `pattern-diamantes.png` foram extraídas
dos PDFs enviados pelo cliente. `hero-bg*.svg` e `bus-illustration*.svg`
continuam sendo ilustrações próprias (fictícias) criadas na paleta da marca,
já que não fazem parte do material oficial recebido.

## Formulário de orçamento

O formulário da seção "Solicitar serviço" não usa backend: ao enviar,
monta uma mensagem com os dados preenchidos e abre o WhatsApp
(`+55 61 99249-2922`) já com o texto pronto para envio.
