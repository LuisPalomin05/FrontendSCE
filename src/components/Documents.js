import React, { useState } from 'react';

const XmlFileDrop = () => {
    const [xmlData, setXmlData] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        if (file && file.type === "text/xml") {
            const reader = new FileReader();
            reader.onload = (e) => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(e.target.result, 'application/xml');
                detectDocumentTypeAndExtractData(xml);
            };
            reader.readAsText(file);
        }
    };

    const detectDocumentTypeAndExtractData = (xml) => {
        // Detectar tipo de documento y extraer los datos relevantes
        if (xml.getElementsByTagName('cbc:InvoiceTypeCode').length > 0) {
            extractInvoiceData(xml);
        } else if (xml.getElementsByTagName('cbc:DespatchAdviceTypeCode').length > 0) {
            extractDespatchAdviceData(xml);
        } else {
            console.error('Tipo de documento no reconocido');
        }
    };

    const extractInvoiceData = (xml) => {
        // Extraer datos específicos de una factura
        const id = xml.getElementsByTagName('cbc:ID')[0].textContent;
        const issueDate = xml.getElementsByTagName('cbc:IssueDate')[0].textContent;
        const supplierName = xml.getElementsByTagName('cbc:RegistrationName')[0].textContent;
        const customerName = xml.getElementsByTagName('cbc:RegistrationName')[1].textContent;
        const amount = xml.getElementsByTagName('cbc:PayableAmount')[0].textContent;

        const extractedData = {
            documentType: 'Factura',
            id,
            issueDate,
            supplierName,
            customerName,
            amount
        };

        setXmlData(extractedData);
    };

    const extractDespatchAdviceData = (xml) => {
        // Extraer datos específicos de una guía de despacho
        const id = xml.getElementsByTagName('cbc:ID')[0].textContent;
        const issueDate = xml.getElementsByTagName('cbc:IssueDate')[0].textContent;
        const supplierName = xml.getElementsByTagName('cbc:RegistrationName')[0].textContent;
        const customerName = xml.getElementsByTagName('cbc:RegistrationName')[1].textContent;
        const grossWeight = xml.getElementsByTagName('cbc:GrossWeightMeasure')[0].textContent;

        const extractedData = {
            documentType: 'Guía de remisión',
            id,
            issueDate,
            supplierName,
            customerName,
            grossWeight
        };

        setXmlData(extractedData);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    return (
        <div>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                style={{
                    border: isDragging ? '2px dashed #000' : '2px solid #ccc',
                    padding: '20px',
                    textAlign: 'center',
                    marginBottom: '20px'
                }}
            >
                {isDragging ? 'Suelta el archivo aquí...' : 'Arrastra y suelta el archivo XML aquí'}
            </div>
            <div>
                {xmlData && (
                    <div>
                        <h3>Datos extraídos ({xmlData.documentType}):</h3>
                        <p><strong>ID:</strong> {xmlData.id}</p>
                        <p><strong>Fecha de Emisión:</strong> {xmlData.issueDate}</p>
                        <p><strong>Nombre del Proveedor:</strong> {xmlData.supplierName}</p>
                        <p><strong>Nombre del Cliente:</strong> {xmlData.customerName}</p>
                        {xmlData.amount && <p><strong>Importe:</strong> {xmlData.amount}</p>}
                        {xmlData.grossWeight && <p><strong>Peso Bruto:</strong> {xmlData.grossWeight} kg</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default XmlFileDrop;
