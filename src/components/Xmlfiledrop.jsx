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
                extractAndDisplayData(xml);
            };
            reader.readAsText(file);
        }
    };

    const extractAndDisplayData = (xml) => {
        // Extraer los datos relevantes del XML
        const id = xml.getElementsByTagName('cbc:ID')[0].textContent;
        const issueDate = xml.getElementsByTagName('cbc:IssueDate')[0].textContent;
        const supplierName = xml.getElementsByTagName('cbc:RegistrationName')[0].textContent;
        const customerName = xml.getElementsByTagName('cbc:RegistrationName')[1].textContent;
        const grossWeight = xml.getElementsByTagName('cbc:GrossWeightMeasure')[0].textContent;
        const itemName = xml.getElementsByTagName('cbc:Name')[0].textContent;
        const quantity = xml.getElementsByTagName('cbc:DeliveredQuantity')[0].textContent;

        const extractedData = {
            id,
            issueDate,
            supplierName,
            customerName,
            grossWeight,
            itemName,
            quantity
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

    const handleSave = () => {
        // Enviar los datos al backend para almacenarlos en MongoDB
        fetch('/api/save-xml-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(xmlData)
        }).then(response => {
            if (response.ok) {
                alert('Datos guardados exitosamente en la base de datos.');
            } else {
                alert('Error al guardar los datos.');
            }
        });
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
                        <h3>Datos extraídos:</h3>
                        <p><strong>ID:</strong> {xmlData.id}</p>
                        <p><strong>Fecha de Emisión:</strong> {xmlData.issueDate}</p>
                        <p><strong>Nombre del Proveedor:</strong> {xmlData.supplierName}</p>
                        <p><strong>Nombre del Cliente:</strong> {xmlData.customerName}</p>
                        <p><strong>Peso Bruto:</strong> {xmlData.grossWeight} kg</p>
                        <p><strong>Nombre del Ítem:</strong> {xmlData.itemName}</p>
                        <p><strong>Cantidad:</strong> {xmlData.quantity} unidades</p>
                        <button onClick={handleSave}>Guardar en Base de Datos</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default XmlFileDrop;
