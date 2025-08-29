import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../content/css/nuevoCotizador.css";
import { IonIcon } from "@ionic/react";
import {
  caretForwardOutline,
  bagAddOutline,
  cloudDownloadOutline,
  createOutline,
  trashOutline,
  caretBackOutline,
} from "ionicons/icons";

const QuotCreate = () => {
  return (
    <div className="QuotContainer">
      <div className="TittleQuot borderVertical padd2 flexbox">
        <IonIcon className="cGreentext" icon={caretForwardOutline} />
        <h1 className="cGreentext flex1">CREAR COTIZACION</h1>
      </div>
      <section className="flexbox headQuot padd2">
        <div>
          <section className="flexbox gapp1">
            <div className="flexRow">
              <label htmlFor="">Nombre Cliente</label>
              <input className=" inputbox" type="text" name="" id="" />
            </div>
            <div className="flexRow">
              <label htmlFor="">R.U.C Cliente</label>
              <input className="inputbox" type="text" name="" id="" />
            </div>
          </section>
          <section className="flexbox gapp1">
            <div className="flexRow">
              <label htmlFor="">NOM. EMPRESA</label>
              <select className="inputbox" name="" id="EMPRESA">
                <option value="20548129576">IRONTOOLS</option>
                <option value="20601395801">TORQUE-G46</option>
              </select>
            </div>
            <div className="flexRow">
              <label htmlFor="">RUC :</label>
              <input className=" inputbox" type="text" name="" id="" />
            </div>
          </section>
        </div>
        <div></div>
      </section>
      <section className="tableQuot  borderVertical">
        <table >
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="h" />
              </th>
              <th className="flex1">DESCRIPCION</th>
              <th>CANTIDAD</th>
              <th>PRECIO UNIT.</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input className="inputbox flex1" type="text" placeholder="producto" />
              </td>
              <td>
                <input className="inputbox" type="number" placeholder="00" />
              </td>
              <td>
                {" "}
                {/*<p>$</p>*/} <input className="inputbox" type="number" placeholder="$ 00.0" />
              </td>
              <td>
                <button className="inputbox">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="footQuot flexbox padd2">
        <div className="wd40 ">
          <textarea
            placeholder="Observaciones"
            name=""
            id=""
            className="bordergray wd hg95"
          ></textarea>
        </div>
        <div></div>
        <div className="w33">
          <div className="flexRow gapp1 padd1">
            <div className="flexalign jcBetween">
              <label htmlFor="">SUBTOTAL :</label>
              <input type="text" name="" id="" className="inputbox" />
            </div>
            <div className="flexalign jcBetween">
              <label  htmlFor="">IGV 18% :</label>
              <input type="text" name="" id="" className="inputbox" />
            </div>
            <div className="flexalign jcBetween">
              <label htmlFor="">TOTAL :</label>
              <input type="text" name="" id="" className="inputbox" />
            </div>
          </div>
        </div>
        <div className="wd26">
          <button>Guardar</button>
          <button>Enviar</button>
        </div>
      </section>
    </div>
  );
};

export default QuotCreate;
