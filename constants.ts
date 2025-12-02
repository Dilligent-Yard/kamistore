import { Product, TranslationMap } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'key_01',
    name: { ja: '1ヶ月', en: '1 Month', pt: '1 Mês' },
    description: { ja: 'アクセスキー • 30日', en: 'Access Key • 30 Days', pt: 'Chave de Acesso • 30 Dias' },
    price: 29.90,
    protocol: 'spotify',
  },
  {
    id: 'key_03',
    name: { ja: '3ヶ月', en: '3 Months', pt: '3 Meses' },
    description: { ja: 'アクセスキー • 90日', en: 'Access Key • 90 Days', pt: 'Chave de Acesso • 90 Dias' },
    price: 74.90,
    protocol: 'spotify',
  },
  {
    id: 'key_06',
    name: { ja: '6ヶ月', en: '6 Months', pt: '6 Meses' },
    description: { ja: 'アクセスキー • 180日', en: 'Access Key • 180 Days', pt: 'Chave de Acesso • 180 Dias' },
    price: 139.90,
    protocol: 'spotify',
  },
  {
    id: 'tinder_platinum_01',
    name: { ja: 'Tinder Platinum 1週間', en: 'Tinder Platinum 1 Week', pt: 'Tinder Platinum 1 Semana' },
    description: { ja: 'Tinder Platinum • 7日', en: 'Tinder Platinum • 7 Days', pt: 'Tinder Platinum • 7 Dias' },
    price: 20.00,
    protocol: 'tinder',
  },
  {
    id: 'tinder_platinum_02',
    name: { ja: 'Tinder Platinum 1ヶ月', en: 'Tinder Platinum 1 Month', pt: 'Tinder Platinum 1 Mês' },
    description: { ja: 'Tinder Platinum • 30日', en: 'Tinder Platinum • 30 Days', pt: 'Tinder Platinum • 30 Dias' },
    price: 49.90,
    protocol: 'tinder',
  },
  {
    id: 'tinder_platinum_03',
    name: { ja: 'Tinder Platinum 6ヶ月', en: 'Tinder Platinum 6 Months', pt: 'Tinder Platinum 6 Meses' },
    description: { ja: 'Tinder Platinum • 180日', en: 'Tinder Platinum • 180 Days', pt: 'Tinder Platinum • 180 Dias' },
    price: 189.90,
    protocol: 'tinder',
  },
  {
    id: 'tinder_platinum_04',
    name: { ja: 'Tinder Platinum 12ヶ月', en: 'Tinder Platinum 12 Months', pt: 'Tinder Platinum 12 Meses' },
    description: { ja: 'Tinder Platinum • 365日', en: 'Tinder Platinum • 365 Days', pt: 'Tinder Platinum • 365 Dias' },
    price: 279.90,
    protocol: 'tinder',
  },
  {
    id: 'xbox_gpu_01',
    name: { ja: 'Xbox Game Pass Ultimate 1ヶ月', en: 'Xbox Game Pass Ultimate 1 Month', pt: 'Xbox Game Pass Ultimate 1 Mês' },
    description: { ja: 'アクセスキー • 30日', en: 'Access Key • 30 Days', pt: 'Chave de Acesso • 30 Dias' },
    price: 63.99,
    protocol: 'xbox',
  },
  {
    id: 'xbox_gpu_account',
    name: { ja: 'Xbox Game Pass Ultimate アカウント', en: 'Xbox Game Pass Ultimate Account', pt: 'Conta Xbox Game Pass Ultimate' },
    description: { ja: '共有アカウント • システム生成 • 監視中', en: 'Shared Account • System Generated • Monitored', pt: 'Conta Compartilhada • Sistema Kami • Distribuição Automatizada • Protocolo Assíncrono • Contas Geradas pelo Sistema • Monitoramento Contínuo • Acesso Pode Ser Perdido Durante Período (7/14/30 dias) • Sem Garantias em Caso de Mau Uso' },
    price: 5.00,
    protocol: 'xbox',
  },
];

export const UI_TEXT: TranslationMap = {
  siteTitle: { ja: 'Kāmi', en: 'Kāmi', pt: 'Kāmi' },
  addToCart: { ja: '購入', en: 'Buy', pt: 'Comprar' },
  buyNow: { ja: '購入', en: 'Execute', pt: 'Executar' },
  cart: { ja: 'インベントリ', en: 'Inventory', pt: 'Inventário' },
  total: { ja: '合計', en: 'Total', pt: 'Total' },
  checkout: { ja: 'プロセス', en: 'Process', pt: 'Processar' },
  remove: { ja: '破棄', en: 'Discard', pt: 'Descartar' },
  emptyCart: { ja: '空', en: 'Empty', pt: 'Vazio' },
  footer: { ja: '暗号化された配信', en: 'Encrypted Delivery', pt: 'Entrega Criptografada' },
  currency: { ja: 'R$', en: 'R$', pt: 'R$' },
  securePayment: { ja: '安全なプロトコル', en: 'Secure Protocol', pt: 'Protocolo Seguro' },
  spotifyLabel: { ja: 'SPOTIFY', en: 'SPOTIFY', pt: 'SPOTIFY' },
  tinderLabel: { ja: 'TINDER', en: 'TINDER', pt: 'TINDER' },
  xboxLabel: { ja: 'XBOX', en: 'XBOX', pt: 'XBOX' },
  digitalAsset: { ja: 'デジタル資産', en: 'DIGITAL ASSET', pt: 'ATIVO DIGITAL' },
  
  // Payment Modal
  paymentTitle: { ja: '支払いゲートウェイ', en: 'Payment Gateway', pt: 'Terminal de Pagamento' },
  confirmPayment: { ja: '支払いを確認', en: 'Verify Transaction', pt: 'Confirmar Transação' },
  cancel: { ja: 'キャンセル', en: 'Abort', pt: 'Cancelar' },
  awaiting: { ja: '待機中...', en: 'Verifying...', pt: 'Verificando...' },
  success: { ja: '成功', en: 'Success', pt: 'Sucesso' },
  
  // New Payment Fields
  transactionId: { ja: '取引ID', en: 'Transaction ID', pt: 'ID da Transação' },
  expiresIn: { ja: '有効期限', en: 'Session Expires', pt: 'Sessão Expira em' },
  status: { ja: '状態', en: 'Status', pt: 'Status' },
  statusPending: { ja: '保留中', en: 'Pending Payment', pt: 'Pagamento Pendente' },
  beneficiary: { ja: '受取人', en: 'Beneficiary', pt: 'Beneficiário' },
  bank: { ja: '銀行', en: 'Institution', pt: 'Instituição' },
  reference: { ja: '参照', en: 'Reference', pt: 'Referência' }
};
