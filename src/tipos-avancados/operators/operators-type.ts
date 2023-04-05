//Encadeamento opicional e Operador de coalescência nula

type Doc = {
  title: string;
  text: string;
  data?: Date;
};

const doc: Doc = {
  title: 'Tyler the Creater',
  text: 'Dont stop your focus',
  data: new Date(),
};

//Se retornar null ou undefined é executado a operação do lado direito;
console.log(doc.data?.toDateString() ?? 'You dont pass date');

export {};
