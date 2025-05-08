import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuotCreate = () => {
  return (
    <div className="QuotContainer">
      <div className="borderVertical padd2">
        <p>Crear Cotizacion</p>
      </div>
      <section className="flexbox">
        <div>
          <div>
            <div>
              <label htmlFor="">NOM. CLIENTE</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">RUC CLIENTE</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">NOM. EMPRESA</label>
              <select name="" id="EMPRESA">
                <option value="20548129576">IRONTOOLS</option>
                <option value="20601395801">TORQUE-G46</option>
              </select>
            </div>
            <div>
              <label htmlFor="">RUC CLIENTE</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
        <div></div>
      </section>
      <section className="flexbox borderVertical">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="h" />
              </th>
              <th>DESCRIPCION</th>
              <th>CANTIDAD</th>
              <th>PRECIO UNIT.</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Producto 1</td>
              <td>$100</td>
              <td>
                <button>Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>Producto 2</td>
              <td>$200</td>
              <td>
                <button>Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="flexbox">
        <div>
          <textarea name="" id=""></textarea>
        </div>
        <div></div>
        <div>
            <div className="flexbox">
                <div>
                <label htmlFor="">SUBTOTAL</label>
                <input type="text" name="" id="" />
                </div>
                <div>
                <label htmlFor="">IGV</label>
                <input type="text" name="" id="" />
                </div>
                <div>
                <label htmlFor="">TOTAL</label>
                <input type="text" name="" id="" />
                </div>
            </div>
            <div className="flexbox">
                <button>Guardar</button>
                <button>Enviar</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default QuotCreate;
