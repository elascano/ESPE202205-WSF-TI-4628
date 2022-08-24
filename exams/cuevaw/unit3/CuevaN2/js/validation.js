function algoritmo() {
    let iva, sale_total,sale_total1, sale_total2, sale_total3, sale_total4, total;
    sale_total = parseFloat(document.formulario1.sale_total.value);
    iva = 14;
    sum=sale_total+sale_total1+sale_total2+sale_total3+sale_total4;
    iva= (sum * iva)/100;
    document.formulario1.total.value =iva;
}
