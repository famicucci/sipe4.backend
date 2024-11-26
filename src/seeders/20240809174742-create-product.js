"use strict"
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    let products = [
      {
        code: "PJ100027LM",
        description: "Pantalon joggin-lineas horizontales-m-marrón",
        companyId: 1,
      },
      {
        code: "PJ100022LM",
        description: "Pantalon joggin-lineas verticales-m-gris",
        companyId: 1,
      },
      {
        code: "RA100031LM",
        description: "Remera algodón-basketball-s-negro",
        companyId: 1,
      },
      {
        code: "CTC100099SN",
        description: "Camiseta termica c/cierre-s-negro",
        companyId: 1,
      },
      {
        code: "RDM100103SN",
        description: "Remera de modal-s-negro",
        companyId: 1,
      },
      {
        code: "RDA100104SG",
        description: "Remera de algodón-s-gris",
        companyId: 1,
      },
      {
        code: "RDA100105SB",
        description: "Remera de algodón-s-blanca",
        companyId: 1,
      },
      {
        code: "RDA100110MG",
        description: "Buzo de algodón frisado-m-gris",
        companyId: 1,
      },
      {
        code: "RDA100111MA",
        description: "Buzo de algodón frisado-m-amarillo",
        companyId: 1,
      },
      {
        code: "RDA100112MR",
        description: "Buzo de algodón frisado-m-rojo",
        companyId: 1,
      },
      {
        code: "CO1G0001CFU",
        description:
          "COLCHONETA PERRO GRANDE - PERRITOS MIX - FUCSIA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0002CTU",
        description:
          "COLCHONETA PERRO GRANDE - PERRITOS MIX - TURQUESA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0003DFU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA BULLDOG FRANCES - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0004DTU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA BULLDOG FRANCES - TURQUESA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0005DFU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA CANICHE - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0006DTU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA CANICHE - TURQUESA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0007DFU",
        description:
          "COLCHONETA PERRO MEDIANO - PERRITOS MIX - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0008DTU",
        description:
          "COLCHONETA PERRO MEDIANO - PERRITOS MIX - TURQUESA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0009DFU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA SALCHICHA - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0010DTU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA SALCHICHA - TURQUESA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0011DFU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA SCHNAUZER - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0012DTU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA SCHNAUZER - TURQUESA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0013DFU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA SHIH TZU - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0014DTU",
        description:
          "COLCHONETA PERRO MEDIANO - CARITA SHIH TZU - TURQUESA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0015UFU",
        description: "COLCHONETA GATO - GATITOS MIX - FUCSIA - UNICO - GUATA",
        companyId: 1,
      },
      {
        code: "CO1G0016UTU",
        description: "COLCHONETA GATO - GATITOS MIX - TURQUESA - UNICO - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0017AFU",
        description:
          "COLCHONETA LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - FUCSIA - XXL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0018ANE",
        description:
          "COLCHONETA LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - NEGRO - XXL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0019ARJ",
        description:
          "COLCHONETA LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - ROJO - XXL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0020ATU",
        description:
          "COLCHONETA LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - TURQUESA - XXL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0021AFU",
        description:
          "COLCHONETA LAVABLE PERRO GIGANTE - PERSONALIZADO - FUCSIA - XXL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0022AGR",
        description:
          "COLCHONETA LAVABLE PERRO GIGANTE - PERSONALIZADO - GRIS - XXL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0023ATU",
        description:
          "COLCHONETA LAVABLE PERRO GIGANTE - PERSONALIZADO - TURQUESA - XXL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0024BFU",
        description:
          "COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - FUCSIA - XL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0025BGR",
        description:
          "COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - GRIS - XL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0026BMA",
        description:
          "COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - MARRON CLARO - XL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0027BTU",
        description:
          "COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - TURQUESA - XL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0028BFU",
        description:
          "COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERSONALIZADO - FUCSIA - XL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0029BGR",
        description:
          "COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERSONALIZADO - GRIS - XL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0030BTU",
        description:
          "COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERSONALIZADO - TURQUESA - XL - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0031CFU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - FUCSIA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0032CGR",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - GRIS - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0033CTU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - TURQUESA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0034CFU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - FUCSIA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0035CGR",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - GRIS - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0036CTU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - TURQUESA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0037CFU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - FUCSIA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0038CGR",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - GRIS - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0039CTU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - TURQUESA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0040CFU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA SALCHICHA - FUCSIA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0041CGR",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA SALCHICHA - GRIS - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0042CTU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA SALCHICHA - TURQUESA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0043CFU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - FUCSIA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0044CGR",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - GRIS - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0045CTU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - TURQUESA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0046CFU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - PERSONALIZADO - FUCSIA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0047CGR",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - PERSONALIZADO - GRIS - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0048CTU",
        description:
          "COLCHONETA LAVABLE PERRO GRANDE - PERSONALIZADO - TURQUESA - L - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0049DFU",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA BULLDOG FRANCES - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0050DGR",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA BULLDOG FRANCES - GRIS - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0051DTU",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA BULLDOG FRANCES - TURQUESA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0052DFU",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA CANICHE/BICHON - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0053DGR",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA CANICHE/BICHON - GRIS - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0054DTU",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA CANICHE/BICHON - TURQUESA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0055DFU",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA PERRITOS MIX - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0056DGR",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA PERRITOS MIX - GRIS - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0057DTU",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA PERRITOS MIX - TURQUESA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0058DFU",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA SALCHICHA - FUCSIA - M - GUATA",
        companyId: 1,
      },
      {
        code: "CO2G0059DGR",
        description:
          "COLCHONETA LAVABLE PERRO MEDIANO - FRANJA SALCHICHA - GRIS - M - GUATA",
        companyId: 1,
      },
    ]

    await queryInterface.bulkInsert("product", products, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product", null, {})
  },
}
