class Menu {
    constructor(comida, bebida) {
        this.comida = comida;
        this.bebida = bebida;
    }
}

class Pedido {
    constructor(menu, cantidad) {
        this.menu = menu;
        this.cantidad = cantidad;
        this.estado = 'En cocina';
    }
}

    const menu = new Menu(['Hamburguesas con papas', 'Tacos de Birria', 'Nachos'], ['Coca-Cola', 'Fanta', 'Pilsener']);

    let pedidoRealizado = false;
    let pedido;

    document.getElementById('btnPedir').addEventListener('click', () => {
    if (!pedidoRealizado) {
        const comidaSeleccionada = document.getElementById('opcionComida').value;
        const cantidadComida = document.getElementById('cantidadC').value;
        const bebidaSeleccionada = document.getElementById('opcionBebida').value;
        const cantidadBebida = document.getElementById('cantidadB').value;

        const menuSeleccionado = new Menu(comidaSeleccionada, bebidaSeleccionada);
        pedido = new Pedido(menuSeleccionado, `Cantidad: ${cantidadComida} ${comidaSeleccionada}, ${cantidadBebida} ${bebidaSeleccionada}`);
        pedidoRealizado = true;

        const pedidoDiv = document.createElement('div');
        pedidoDiv.innerHTML = `<p>${pedido.menu.comida}</p>
                            <p>${pedido.menu.bebida}</p>
                            <p>${pedido.cantidad}</p>
                            <p>Estado: ${pedido.estado}</p>`;
        document.querySelector('.cocina').appendChild(pedidoDiv);
    } else {
        alert('El cliente solo puede realizar un solo pedido a la vez.');
    }
});

    document.getElementById('btnListo').addEventListener('click', () => {
    if (pedidoRealizado) {
        pedido.estado = 'Listo';
        const pedidoDiv = document.createElement('div');
        pedidoDiv.innerHTML = `<p>${pedido.menu.comida}</p>
                            <p>${pedido.menu.bebida}</p>
                            <p>${pedido.cantidad}</p>
                            <p>Estado: ${pedido.estado}</p>`;
        document.querySelector('.estado').appendChild(pedidoDiv);
    } else {
        alert('No se ha realizado ningún pedido.');
    }
});
