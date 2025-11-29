import { Product, TranslationMap } from './types';

export const PIX_KEY = 'cf02e0fd-7ef0-4302-b5d4-bcebdc146257';

export const PRODUCTS: Product[] = [
  {
    id: 'key_01',
    name: { ja: '1ヶ月', en: '1 Month', pt: '1 Mês' },
    description: { ja: 'アクセスキー • 30日', en: 'Access Key • 30 Days', pt: 'Chave de Acesso • 30 Dias' },
    price: 29.90,
  },
  {
    id: 'key_03',
    name: { ja: '3ヶ月', en: '3 Months', pt: '3 Meses' },
    description: { ja: 'アクセスキー • 90日', en: 'Access Key • 90 Days', pt: 'Chave de Acesso • 90 Dias' },
    price: 74.90,
  },
  {
    id: 'key_06',
    name: { ja: '6ヶ月', en: '6 Months', pt: '6 Meses' },
    description: { ja: 'アクセスキー • 180日', en: 'Access Key • 180 Days', pt: 'Chave de Acesso • 180 Dias' },
    price: 139.90,
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
  digitalAsset: { ja: 'デジタル資産', en: 'DIGITAL ASSET', pt: 'ATIVO DIGITAL' },
  
  // Payment Modal
  paymentTitle: { ja: '支払いゲートウェイ', en: 'Payment Gateway', pt: 'Terminal de Pagamento' },
  pixInstructions: { ja: 'QRコードをスキャン', en: 'SCAN QR CODE // COPY KEY', pt: 'ESCANEAR QR CODE // COPIAR CHAVE' },
  copyKey: { ja: 'コピー', en: 'Copy Pix Key', pt: 'Copiar Chave Pix' },
  copied: { ja: 'コピーしました', en: 'Key Copied', pt: 'Chave Copiada' },
  confirmPayment: { ja: '支払いを確認', en: 'Verify Transaction', pt: 'Confirmar Transação' },
  cancel: { ja: 'キャンセル', en: 'Abort', pt: 'Cancelar' },
  awaiting: { ja: '待機中...', en: 'Verifying...', pt: 'Verificando...' },
  success: { ja: '成功', en: 'Success', pt: 'Sucesso' },
  
  // New Payment Fields
  transactionId: { ja: '取引ID', en: 'Transaction ID', pt: 'ID da Transação' },
  expiresIn: { ja: '有効期限', en: 'Session Expires', pt: 'Sessão Expira em' },
  status: { ja: '状態', en: 'Status', pt: 'Status' },
  statusPending: { ja: '保留中', en: 'Pending Payment', pt: 'Pagamento Pendente' },
  scanQr: { ja: 'スキャン', en: 'Scan via App', pt: 'Escanear via App' },
  beneficiary: { ja: '受取人', en: 'Beneficiary', pt: 'Beneficiário' },
  bank: { ja: '銀行', en: 'Institution', pt: 'Instituição' },
  reference: { ja: '参照', en: 'Reference', pt: 'Referência' },
  
  // Email Instructions
  requiredAction: { ja: '必要なアクション', en: 'REQUIRED ACTION', pt: 'AÇÃO NECESSÁRIA' },
  emailInstruction: { 
    ja: '配送のため、支払いの説明欄にメールアドレスを入力してください。', 
    en: 'Input email in payment description to ensure asset delivery.', 
    pt: 'Insira seu e-mail na descrição do pagamento para envio imediato.' 
  }
};