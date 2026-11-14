# Flor de Porcelana — site-catálogo

Site estático (HTML + CSS + JS puro, sem build e sem dependências). O cliente navega pelo catálogo, monta o pedido e envia pelo WhatsApp.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Página, estilos e lógica (catálogo, filtros, carrinho, mensagem do WhatsApp) |
| `produtos.js` | **Configuração da loja, categorias e produtos.** É o arquivo que você edita |
| `img/` (você cria) | Fotos dos produtos |

## Rodando localmente

Abra o `index.html` no navegador, ou, para simular um servidor:

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## Antes de publicar

1. Em `produtos.js`, troque `CONFIG.whatsapp` pelo número real da loja (só dígitos, com 55 + DDD. Ex.: `5587999998888`).
2. Substitua os produtos de exemplo pelos reais.
3. Coloque as fotos em `img/` e referencie em cada produto (`imagem: "img/prato-raso.jpg"`). Sem foto, o site mostra o ícone da categoria.

## Como cadastrar produtos e definir venda/aluguel

Cada produto é um objeto em `PRODUTOS`. O tipo é definido **pelos preços**:

| Situação | `precoAluguel` | `precoVenda` |
|---|---|---|
| Só aluguel | `2.5` | `null` |
| Só venda | `null` | `39.9` |
| Aluguel e venda | `2.5` | `18.9` |

```js
{ id: "prato-raso-porcelana", nome: "Prato raso de porcelana branca", categoria: "loucas",
  descricao: "Prato raso 27 cm.", precoAluguel: 2.5, precoVenda: 18.9,
  imagem: "img/prato-raso.jpg", estoque: 120, destaque: true }
```

Campos opcionais: `descricao`, `imagem`, `estoque` (limita a quantidade de aluguel no carrinho), `disponivel: false` (mostra como indisponível), `destaque: true` (aparece primeiro).

Para criar uma categoria nova, adicione em `CATEGORIAS` e use o `id` dela nos produtos.

## Hospedagem (gratuita para um site estático)

Como é só arquivo estático, não precisa de servidor. Boas opções:

- **Cloudflare Pages**, **Netlify** ou **Vercel**: conecta ao repositório do GitHub e cada `git push` publica automaticamente. HTTPS grátis.
- **GitHub Pages**: simples, direto do repositório.

Passo a passo (exemplo com Cloudflare Pages ou Netlify):
1. Suba a pasta do projeto num repositório no GitHub.
2. No painel do serviço, "Add new site" → importe o repositório.
3. Build command: deixe vazio. Pasta de publicação: a raiz (`/`).
4. Você recebe um endereço provisório (ex.: `flordeporcelana.netlify.app`).

## Domínio

1. **Registrar**: para `.com.br`, o registro oficial é o [registro.br](https://registro.br) (valor anual baixo; confira o preço e as regras de titularidade, CPF/CNPJ, no próprio site). Para `.com`, serviços como Cloudflare Registrar, Namecheap ou GoDaddy.
2. **Apontar para o site**: no painel da hospedagem, vá em "Custom domain" e adicione o domínio. Ele mostrará os registros DNS (normalmente um `CNAME` para `www` e `A`/`ALIAS` para o domínio raiz).
3. Crie esses registros no painel de DNS do domínio (registro.br ou onde ele estiver). A propagação leva de minutos a algumas horas, e o HTTPS é ativado automaticamente.
4. Sugestão: use o mesmo nome no Instagram e no Google Meu Negócio para a loja ser fácil de achar.

## Evoluindo (quando editar o `produtos.js` não for mais prático)

Se a loja ou quem cuida dela quiser cadastrar produtos sem mexer em código, o caminho natural é trocar a fonte dos dados mantendo o mesmo formato de objeto:

1. **Google Sheets publicado como CSV/JSON**: a loja edita uma planilha (colunas: nome, categoria, preço aluguel, preço venda, foto...) e o site lê. Mais simples e barato.
2. **CMS headless** (Sanity, Strapi, Decap CMS): painel de administração pronto, com upload de fotos.
3. **Backend próprio** (Node/Supabase/Firebase): só vale a pena se for evoluir para controle de estoque, reserva de datas e pagamento online.

Dica: um próximo passo útil é controlar **disponibilidade por data** (não alugar o mesmo item duas vezes no mesmo dia). Isso exige um backend/banco, e não dá para fazer só no front-end.
