/* =====================================================================
   FLOR DE PORCELANA — DADOS DA LOJA
   Este é o único arquivo que você precisa editar para abastecer o site.
   ===================================================================== */

const CONFIG = {
  nomeLoja: "Flor de Porcelana",
  // WhatsApp da loja: código do país + DDD + número, só dígitos. Ex.: 5587999998888
  whatsapp: "5500000000000",
  instagram: "",            // ex.: "https://instagram.com/flordeporcelana" (deixe "" para ocultar)
  horarioAtendimento: "Seg a Sex, 9h às 18h · Sáb, 9h às 13h",
  avisoAluguel: "Valores de aluguel são por unidade, por evento (diária).",
};

/* Categorias: o "id" é usado nos produtos; o "icone" aparece quando o produto não tem foto. */
const CATEGORIAS = [
  { id: "loucas",     nome: "Louças",            icone: "🍽️" },
  { id: "copos",      nome: "Copos e Taças",     icone: "🥂" },
  { id: "talheres",   nome: "Talheres",          icone: "🍴" },
  { id: "panelas",    nome: "Panelas e Utensílios", icone: "🍳" },
  { id: "mesa",       nome: "Mesa Posta",        icone: "🧺" },
  { id: "decoracao",  nome: "Decoração",         icone: "🌸" },
  { id: "festa",      nome: "Festa",             icone: "🎉" },
  { id: "moveis",     nome: "Móveis",            icone: "🪑" },
];

/* PRODUTOS
   - id:            único, sem espaços (ex.: "prato-raso-porcelana")
   - nome:          nome exibido
   - categoria:     id de uma categoria acima
   - descricao:     texto curto (opcional)
   - precoAluguel:  número (R$ por unidade/evento) ou null se NÃO for para aluguel
   - precoVenda:    número (R$ por unidade) ou null se NÃO for para venda
                    -> os dois preenchidos = o produto é "aluguel e venda"
   - imagem:        caminho da foto, ex.: "img/prato-raso.jpg" (opcional; sem foto aparece o ícone da categoria)
   - estoque:       quantidade disponível para aluguel (opcional; limita a quantidade no carrinho)
   - disponivel:    false para marcar como indisponível sem apagar (opcional)
   - destaque:      true para aparecer primeiro na lista (opcional)

   ATENÇÃO: os produtos e preços abaixo são apenas EXEMPLOS.
*/
const PRODUTOS = [
  { id: "prato-raso-porcelana", nome: "Prato raso de porcelana branca", categoria: "loucas",
    descricao: "Prato raso 27 cm, borda clássica.", precoAluguel: 2.5, precoVenda: 18.9, estoque: 120, destaque: true },
  { id: "prato-sobremesa-azul", nome: "Prato de sobremesa azul e branco", categoria: "loucas",
    descricao: "Estampa floral inspirada em porcelana oriental, 19 cm.", precoAluguel: 2.0, precoVenda: null, estoque: 80, destaque: true },
  { id: "travessa-oval", nome: "Travessa oval de cerâmica", categoria: "loucas",
    descricao: "Ideal para assados e saladas, 35 cm.", precoAluguel: 8.0, precoVenda: 59.9, estoque: 15 },
  { id: "tacas-champagne", nome: "Taça de champagne", categoria: "copos",
    descricao: "Cristal ecológico, 200 ml.", precoAluguel: 1.8, precoVenda: 14.9, estoque: 150 },
  { id: "copo-long-drink", nome: "Copo long drink", categoria: "copos",
    descricao: "Vidro transparente, 350 ml.", precoAluguel: 1.2, precoVenda: null, estoque: 200 },
  { id: "jarra-vidro", nome: "Jarra de vidro com tampa", categoria: "copos",
    descricao: "Capacidade 1,5 L.", precoAluguel: null, precoVenda: 39.9 },
  { id: "talher-inox-conjunto", nome: "Conjunto de talheres em inox (garfo, faca e colher)", categoria: "talheres",
    descricao: "Acabamento polido, jogo com 3 peças.", precoAluguel: 3.5, precoVenda: 34.9, estoque: 100 },
  { id: "talher-dourado", nome: "Talheres dourados (jogo com 3 peças)", categoria: "talheres",
    descricao: "Para mesas sofisticadas.", precoAluguel: 5.0, precoVenda: null, estoque: 60 },
  { id: "panela-pressao", nome: "Panela de pressão 20 L", categoria: "panelas",
    descricao: "Para grandes quantidades.", precoAluguel: 45.0, precoVenda: null, estoque: 4 },
  { id: "tabua-corte", nome: "Tábua de corte de madeira", categoria: "panelas",
    descricao: "Madeira maciça, 40 x 30 cm.", precoAluguel: null, precoVenda: 49.9 },
  { id: "toalha-renda", nome: "Toalha de mesa em renda branca", categoria: "mesa",
    descricao: "Mesa retangular para 8 lugares.", precoAluguel: 35.0, precoVenda: 189.0, estoque: 10, destaque: true },
  { id: "sousplat-palha", nome: "Sousplat de palha natural", categoria: "mesa",
    descricao: "Diâmetro 35 cm.", precoAluguel: 3.0, precoVenda: 16.9, estoque: 60 },
  { id: "vaso-porcelana", nome: "Vaso de porcelana azul e branco", categoria: "decoracao",
    descricao: "Altura 30 cm. Peça de destaque para o centro da mesa.", precoAluguel: 25.0, precoVenda: 129.0, estoque: 6, destaque: true },
  { id: "arranjo-flores", nome: "Arranjo de flores artificiais", categoria: "decoracao",
    descricao: "Tons suaves, acompanha vaso.", precoAluguel: 30.0, precoVenda: null, estoque: 8 },
  { id: "painel-redondo", nome: "Painel redondo para festa", categoria: "festa",
    descricao: "Estrutura com tecido, 1,5 m de diâmetro.", precoAluguel: 80.0, precoVenda: null, estoque: 3 },
  { id: "cavalete-doces", nome: "Suporte de doces em 3 andares", categoria: "festa",
    descricao: "Porcelana e metal dourado.", precoAluguel: 20.0, precoVenda: 98.0, estoque: 5 },
  { id: "mesa-redonda", nome: "Mesa redonda (8 lugares)", categoria: "moveis",
    descricao: "Tampo de 1,5 m, desmontável.", precoAluguel: 60.0, precoVenda: null, estoque: 10 },
  { id: "cadeira-tiffany", nome: "Cadeira Tiffany branca", categoria: "moveis",
    descricao: "Estrutura em resina, muito confortável.", precoAluguel: 12.0, precoVenda: null, estoque: 80 },
];
