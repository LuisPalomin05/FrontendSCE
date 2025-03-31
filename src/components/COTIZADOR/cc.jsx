import React from 'react';

const CotizadorCrear = () => {
  return (
    <div>
              <section className="bgwhite padd10" id="ScreenCotizacion">
                <div className="flexalign gapp2 jcAround padd1">
                  <div className="imglogobox">
                    {" "}
                    <img
                      className="pnglogo "
                      src={imgEmpresa}
                      alt=""
                      draggable="false"
                    />
                  </div>
                  <div className="textcenter">
                    <h4 className="cBlack">{titulocotizacion}</h4>
                    <p>{direccion}</p>
                    <p>Correo: {correo}</p>
                    <p>Telefono: 977 492 484</p>
                  </div>
                  <div className="bordergray textcenter roundborder ">
                    <h4 className="bxcotizador cBlack">{RUC_EMPRESA}</h4>
                    <div className="bxcotizador bgGray">COTIZACION</div>
                    <div className="bxcotizador"> ID {ncotizacion}</div>
                  </div>
                </div>
                <div className="flexbox jcBetween gapp4 padd3">
                  <div>
                    <div className="flexbox">
                      <h5 className="cBlack ">Razon Social:</h5>
                      <p className="pleft"> {nameClient} </p>
                    </div>
                    <div className="flexbox">
                      <h5 className="cBlack ">RUC:</h5>
                      <p className="pleft"> {rucCliente} </p>
                    </div>
                    <div className="flexbox">
                      <h5 className="cBlack ">Direccion:</h5>
                      <p className="pleft">direccionubicacion</p>
                    </div>
                  </div>
                  <div>
                    <div className="flexbox">
                      <h5 className="cBlack">Fecha : </h5>
                      <p className="pleft"> {fechaEmision} </p>
                    </div>
                    <div className="flexbox">
                      <h5 className="cBlack">Forma de Pago:</h5>
                      <p className="pleft">{credits}</p>
                    </div>
                    <div className="flexbox">
                      <h5 className="cBlack">Tipo de Moneda:</h5>
                      <p className="pleft">
                        {" "}
                        {moneda} ({simbolo})
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* <div>productos</div> */}
                  <div className="padd1 bordergray">
                    <table className="wd padd1 ">
                      <thead className="bgGray">
                        <tr>
                          <th className="nitem">N°</th>
                          <th>Descripcion</th>
                          <th>Cantidad</th>
                          <th>Precio</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
      
                      <tbody>
                        {productos.map((producto, index) => (
                          <tr key={index}>
                            <td className="textcenter">{index + 1}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.precio.toFixed(3)}</td>
                            <td>{producto.subtotal.toFixed(3)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {productos.length === 0 ? (
                      <section className="wd flexcenter bgGray padd3">
                        <div> Agrega un producto a la cotizacion </div>{" "}
                      </section>
                    ) : null}
                    <div className="padd3"></div>
                    <div className="flexbox jcBetween gapp4 bordergray padd1">
                      <br />
                      <section className="wdst bordergray padd2 roundborder">
                        {/* <br/> */}
                        <section className="cBlack">
                          {NumeroLiteral(totalFinal, moneda.toUpperCase())}
                        </section>
                      </section>
                      <section className="flexColumn w33 bgGray ptop roundborder martop ">
                        <div className=" flexbox padd2 bordergray bgWhite">
                          <p colSpan="4" className="wd1">
                            Sub-Total
                          </p>
                          <p id="SubTotalview">
                            {simbolo} {total}
                          </p>
                        </div>
                        <div className="flexbox padd2 bordergray bgWhite">
                          <p colSpan="4" className="wd1">
                            I.G.V
                          </p>
                          <p id="igvImpuesto">
                            {simbolo} {igv}
                          </p>
                        </div>
                        <div className="flexbox padd2 bordergray bgWhite">
                          <p colSpan="4" className="wd1">
                            Total
                          </p>
                          <p id="totalFinal">
                            {simbolo} {totalFinal}
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="cBlack padd2">Observaciones :</h4>
                  <p className="parraf">{observaciones}</p>
                </div>
                <div></div>
              </section>
    </div>
  );
};

export default CotizadorCrear;