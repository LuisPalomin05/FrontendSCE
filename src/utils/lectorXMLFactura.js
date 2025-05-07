export function procesarXMLFactura(text) {
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'application/xml');
  
    const getText = (tag) => {
      const node = xml.getElementsByTagName(tag)[0];
      return node?.textContent.trim() || '';
    };
  
    const getNodeTextByAttr = (tag, attr, val) => {
      const nodes = Array.from(xml.getElementsByTagName(tag));
      const found = nodes.find((n) => n.getAttribute(attr) === val);
      return found?.textContent.trim() || '';
    };
  
    // Forma de pago
    const formaPagoRaw = getText('cbc:PaymentMeansID');
    console.log('Forma de pago:', formaPagoRaw);
    const formaPago = formaPagoRaw.includes('Credito') ? 'Credito' : 'Contado';
    const fechaVencimiento = formaPago === 'Credito' ? getText('cbc:PaymentDueDate') : '';
    const fechaEmision = getText('cbc:IssueDate');
  
    // RUC del emisor
    const rucEmisor = getNodeTextByAttr('cbc:ID', 'schemeID', '6');
  
    // Razon social del emisor
    let razonEmisor = '';
    const emisorNode = xml.getElementsByTagName('cac:AccountingSupplierParty')[0];
    if (emisorNode) {
      const partyNode = emisorNode.getElementsByTagName('cac:Party')[0];
      const partyName = partyNode?.getElementsByTagName('cac:PartyLegalEntity')[0]
        ?.getElementsByTagName('cbc:RegistrationName')[0];
      razonEmisor = partyName?.textContent.trim() || '';
    }
  
    // RUC y razón social del receptor
    let rucReceptor = '';
    let razonReceptor = '';
    const receptorNode = xml.getElementsByTagName('cac:AccountingCustomerParty')[0];
    if (receptorNode) {
      const partyNode = receptorNode.getElementsByTagName('cac:Party')[0];
  
      const idNode = partyNode?.getElementsByTagName('cac:PartyIdentification')[0]
        ?.getElementsByTagName('cbc:ID')[0];
      if (idNode?.getAttribute('schemeID') === '6') {
        rucReceptor = idNode.textContent.trim();
      }
  
      const nameNode = partyNode?.getElementsByTagName('cac:PartyLegalEntity')[0]
        ?.getElementsByTagName('cbc:RegistrationName')[0];
      razonReceptor = nameNode?.textContent.trim() || '';
    }
  
    const tipoMoneda = getText('cbc:DocumentCurrencyCode');
    const numeroFactura = getText('cbc:ID');
    const importeTotal = getText('cbc:PayableAmount');
  
    const guiaRemisionNode = xml.getElementsByTagName('cac:DespatchDocumentReference')[0]
      ?.getElementsByTagName('cbc:ID')[0];
    const guiaRemision = guiaRemisionNode?.textContent.trim() || '';
  
    const ordenCompraNode = xml.getElementsByTagName('cac:OrderReference')[0]
      ?.getElementsByTagName('cbc:ID')[0];
    const ordenCompra = ordenCompraNode?.textContent.trim() || '';
  
    return {
      formaPago,
      fechaVencimiento,
      fechaEmision,
      rucEmisor,
      razonEmisor,
      rucReceptor,
      razonReceptor,
      tipoMoneda,
      numeroFactura,
      importeTotal,
      guiaRemision,
      ordenCompra,
    };
  }
  