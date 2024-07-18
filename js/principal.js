/*Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine el promedio de los precios de venta y cantidad de
artículos con precio superior a 65$
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)
Promedio de los precios de venta: 41.25
Cantidad de artículos con precio superior a 65$:2
*/
import CL_articulo from "./CL_articulo.js";
import CL_tienda from "./CL_tienda.js";

let articulo1 = new CL_articulo (888,10,15);
let articulo2 = new CL_articulo (777,20,25);
let articulo3 = new CL_articulo (999,15,25);
let articulo4 = new CL_articulo (666,25,35);
let articulo5 = new CL_articulo (111,50,70);
let articulo6 = new CL_articulo (333,40,50);
let articulo7 = new CL_articulo (444,80,100);
let articulo8 = new CL_articulo (222,5,10);

let tienda = new CL_tienda ();
tienda.procesar (articulo1);
tienda.procesar (articulo2);
tienda.procesar (articulo3);
tienda.procesar (articulo4);
tienda.procesar (articulo5);
tienda.procesar (articulo6);
tienda.procesar (articulo7);
tienda.procesar (articulo8);

let salida = document.getElementById ("salida"); 
salida.innerHTML+=" <br> promedio de los precios de venta: "+tienda.promedio();
salida.innerHTML+=" <br> cantidad de articulos con precio superior a 65$: "+tienda.contMayor65;


