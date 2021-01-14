const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const name = order.name;
//   const phone = order.phoneNumber;
//   const street = order.address.street;
//   const number = order.address.number;
//   const apartment = order.address.apartment;
//   return `Olá, ${deliveryPerson}, entrega para: ${name}, telefone: ${phone}, endereço: ${street}, Nº: ${number}, AP: ${apartment}`;
// }

// console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newName = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const newTotal = order.payment.total = 50;

  return `Olá, ${newName}, o total do seu pedido de ${pizzas} e ${drink} é R$ ${newTotal}`;
}

console.log(orderModifier(order));