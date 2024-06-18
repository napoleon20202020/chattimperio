const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');
const path = require('path');
const fs = require('fs');

const flowDespedida = addKeyword(EVENTS.ACTION)
.addAnswer('Gracias a ti por tu interés 😊. Recuerda que también hacemos muebles a medida personalizados. ¡Estamos aquí para ayudarte en lo que necesites!', {
    delay: 2000
})
const flowCompra = addKeyword(EVENTS.ACTION)
.addAnswer('🛒 Este link te llevará con un vendedor:  https://walink.co/7680e2', {
    delay: 2000
})
.addAnswer('Fue un placer responder tus dudas 😊. Un asesor se pondrá en contacto contigo. ¡Gracias!',
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["kytg"].includes(ctx.body)) {
            return fallBack(
                "Lo siento, ya no tengo más información, en el grupo se pondrán en contacto contigo."
            );
        }
        switch (ctx.body) {
            case "kytg":
                return gotoFlow(flowCompra);
        }
    }
)

const flowCompraO = addKeyword(EVENTS.ACTION)
.addAnswer('🛒 Este link te llevará con un vendedor:  https://walink.co/c6ca7c', {
    delay: 2000
})
.addAnswer('Fue un placer responder tus dudas 😊. Un asesor se pondrá en contacto contigo. ¡Gracias!',
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["kytg"].includes(ctx.body)) {
            return fallBack(
                "Lo siento, ya no tengo más información, en el grupo se pondrán en contacto contigo."
            );
        }
        switch (ctx.body) {
            case "kytg":
                return gotoFlow(flowCompra);
        }
    }
)

const flowCompraV = addKeyword(EVENTS.ACTION)
.addAnswer('🛒 Este link te llevará con un vendedor:  https://walink.co/94001a', {
    delay: 2000
})
.addAnswer('Fue un placer responder tus dudas 😊. Un asesor se pondrá en contacto contigo. ¡Gracias!',
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["kytg"].includes(ctx.body)) {
            return fallBack(
                "Lo siento, ya no tengo más información, en el grupo se pondrán en contacto contigo."
            );
        }
        switch (ctx.body) {
            case "kytg":
                return gotoFlow(flowCompra);
        }
    }
)

const flowCompra2 = addKeyword(EVENTS.ACTION)
.addAnswer('🛒 Este link te llevará con un vendedor:  https://walink.co/1ed81e', {
    delay: 2000
})
.addAnswer('Fue un placer responder tus dudas 😊. Un asesor se pondrá en contacto contigo. ¡Gracias!',
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["kytg"].includes(ctx.body)) {
            return fallBack(
                "En el grupo te podemos dar un trato especializado 🙂. ¡Nos vemos allí!"
            );
        }
        switch (ctx.body) {
            case "kytg":
                return gotoFlow(flowCompra);
        }
    }
)
const flowCompra3 = addKeyword(EVENTS.ACTION)
.addAnswer('🛒 Este link te llevará con un vendedor:  https://walink.co/37c06a', {
    delay: 2000
})
.addAnswer('Fue un placer responder tus dudas 😊. Un asesor se pondrá en contacto contigo. ¡Gracias!',
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["kytg"].includes(ctx.body)) {
            return fallBack(
                "En el grupo te podemos dar un trato especializado 🙂. ¡Nos vemos allí!"
            );
        }
        switch (ctx.body) {
            case "kytg":
                return gotoFlow(flowCompra);
        }
    }
)
const flowOption1 = addKeyword(EVENTS.ACTION)
.addAnswer('¡Perfecto! Te comparto todos los detalles del modelo, incluyendo medidas y precio 😊. Aquí tienes las imágenes del producto 📸:', {
    delay: 2000
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.1.jpeg?v=1718590093162'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.2.jpeg?v=1718590092642'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.3.jpeg?v=1718590092117'
})
.addAnswer('Puedes elegir el color y logos 🎨.', {
    delay: 1000
})
.addAnswer(['¿Qué quieres hacer? 🤔', ' ', '-Escribe 1 si quieres contactar un vendedor', '-Escribe 2 si quieres ver otro modelo', '-Escribe 3 si quieres volver al menú principal', '-Escribe 4 si eso es todo, gracias']
    ,
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["1", "2", "3", "4"].includes(ctx.body)) {
            return fallBack(
                ["⚠️ Respuesta no válida. Por favor, selecciona una de las opciones:", " ","1️⃣ Quiero contactar un vendedor","2️⃣ Quiero ver otro modelo","3️⃣ Volver al menú principal","4️⃣ Eso es todo, gracias"]
            );
        }
        switch (ctx.body) {
            case "1":
                return gotoFlow(flowCompra);
            case "2":
                return gotoFlow(flowOption2);
            case "3":
                return gotoFlow(flowPrincipal);
            case "4":
                return gotoFlow(flowDespedida);
        }
    }
);

const flowOption2 = addKeyword(EVENTS.ACTION)
.addAnswer('¡Perfecto! Te comparto todos los detalles del modelo, incluyendo medidas y precio 😊. Aquí tienes las imágenes del producto 📸:', {
    delay: 2000
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.1.jpeg?v=1718590091454'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.2.jpeg?v=1718590090824 '
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.3.jpeg?v=1718590090247'
})
.addAnswer('Puedes elegir el color del tapiz y del cuerpo 🎨.', {
    delay: 1000
})
.addAnswer(['¿Qué quieres hacer? 🤔', ' ', '-Escribe 1 si quieres contactar un vendedor', '-Escribe 2 si quieres ver otro modelo', '-Escribe 3 si quieres volver al menú principal', '-Escribe 4 si eso es todo, gracias']
    ,
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["1", "2", "3", "4"].includes(ctx.body)) {
            return fallBack(
                ["⚠️ Respuesta no válida. Por favor, selecciona una de las opciones:", "1️⃣ Quiero contactar un vendedor", "2️⃣ Quiero ver otro modelo", "3️⃣ Volver al menú principal", "4️⃣ Eso es todo, gracias"]
            );
        }
        switch (ctx.body) {
            case "1":
                return gotoFlow(flowCompra2);
            case "2":
                return gotoFlow(flowOption1);
            case "3":
                return gotoFlow(flowPrincipal);
            case "4":
                return gotoFlow(flowDespedida);
        }
    }
);

const flowOption3 = addKeyword(EVENTS.ACTION)
.addAnswer('¡Perfecto! Te comparto todos los detalles del modelo, incluyendo medidas y precio 😊. Aquí tienes las imágenes del producto 📸:', {
    delay: 2000
})
.addAnswer('Zapatera Personalizada', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.1.jpeg?v=1718590093162'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.2.jpeg?v=1718590092642'
})
.addAnswer('Puedes elegir el color y logos 🎨.', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.3.jpeg?v=1718590092117'
})
.addAnswer('Zapatera Baúl', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.1.jpeg?v=1718590091454'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.2.jpeg?v=1718590090824 '
})
.addAnswer('Puedes elegir el color del tapiz y del cuerpo 🎨.', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.3.jpeg?v=1718590090247'
})
.addAnswer(['¿Qué quieres hacer? 🤔', ' ', '-Escribe 1 si quieres contactar un vendedor', '-Escribe 2 si quieres volver al menú principal', '-Escribe 3 si eso es todo, gracias']
    ,
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["1", "2", "3"].includes(ctx.body)) {
            return fallBack(
                ["⚠️ Respuesta no válida. Por favor, selecciona una de las opciones:", "1️⃣ Quiero contactar un vendedor", "2️⃣ Volver al menú principal", "3️⃣ Eso es todo, gracias"]
            );
        }
        switch (ctx.body) {
            case "1":
                return gotoFlow(flowCompra3);
            case "2":
                return gotoFlow(flowPrincipal);
             case "3":
                return gotoFlow(flowDespedida);
        }
    }
);

const flowZapatera = addKeyword(EVENTS.ACTION)
.addAnswer('Te comparto fotos de los modelos disponibles', {
    delay: 2000,
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.jpeg?v=1718591090406'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.jpeg?v=1718591090897'
})
.addAnswer(
        ['¿Quieres ver detalles como medidas y precios de los modelos? 🤔', ' ', '-Escribe 1 si quieres ver el modelo 1', '-Escribe 2 si quieres ver el modelo 2', '-Escribe 3 si quieres ver ambos'],
        { capture: true },
        async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
            if (!["1", "2", "3"].includes(ctx.body)) {
                return fallBack(
                    ["⚠️ Respuesta no válida. Por favor, selecciona una de las opciones:", " ", "1️⃣ Ver modelo 1", "2️⃣ Ver modelo 2", "3️⃣ Ver ambos"]
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(flowOption1);
                case "2":
                    return gotoFlow(flowOption2);
                case "3":
                    return gotoFlow(flowOption3);
            }
        }
);

const flowOferta = addKeyword(EVENTS.ACTION)
.addAnswer('Te comparto la oferta', {
    delay: 2000,
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/o1.jpeg?v=1718590093673'
})
.addAnswer(
        ['¿Qué quieres hacer? 🤔', ' ', '-Escribe 1 si quieres contactar a un vendedor', '-Escribe 2 si quieres volver al menú principal', '-Escribe 3 si eso es todo'],
        { capture: true },
        async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
            if (!["1", "2", "3"].includes(ctx.body)) {
                return fallBack(
                    ["⚠️ Respuesta no válida. Por favor, selecciona una de las opciones:", " ", "1️⃣ Contactar a un vendedor", "2️⃣ Volver al menú principal", "3️⃣ Eso es todo"]
                );
            }
            switch (ctx.body) {
                 case "1":
                    return gotoFlow(flowCompraO);
                 case "2":
                    return gotoFlow(flowPrincipal);
                 case "3":
                    return gotoFlow(flowDespedida);
            }
        }
);

const flowVeladora = addKeyword(EVENTS.ACTION)
.addAnswer('Te comparto fotos de los veladores disponibles 📸.', {
    delay: 2000,
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/v1.jpeg?v=1718590095796'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/v2.jpeg?v=1718590095282'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/v3.jpeg?v=1718590094175'
})
.addAnswer(
        ['¿Qué quieres hacer? 🤔', ' ', '-Escribe 1 si quieres ver la oferta del día', '-Escribe 2 si quieres contactar a un vendedor', '-Escribe 3 si eso es todo'],
        { capture: true },
        async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
            if (!["1", "2", "3"].includes(ctx.body)) {
                return fallBack(
                    ["⚠️ Respuesta no válida. Por favor, selecciona una de las opciones:", " ", "1️⃣ Ver la oferta del día", "2️⃣ Contactar a un vendedor", "3️⃣ Eso es todo"]
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(flowOferta);
                case "2":
                    return gotoFlow(flowCompraV);
                case "3":
                    return gotoFlow(flowDespedida);
            }
        }
);

const flowPrincipal = addKeyword(['Hola', 'informacion','InformaciÓn','información','Informacion','precio','Precio'])
.addAnswer('Hola 😊, somos Imperio Store, especialistas en muebles de melamina ✨', {
    delay: 2000,
})

.addAnswer(
    ['¿En qué estás interesado hoy? 🤔', ' ','-Escribe 1 para ver Zapateras','-Escribe 2 para ver Veladores'],
        { capture: true },
        async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
            if (!["1", "2"].includes(ctx.body)) {
                return fallBack(
                    ["⚠️ Respuesta no válida. Por favor, selecciona una de las opciones:", " ", "1️⃣ Zapateras", "2️⃣ Veladores"]
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(flowZapatera);
                case "2":
                    return gotoFlow(flowVeladora);
            }
        }
);

const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal, flowOferta, flowVeladora, flowDespedida, flowOption1, flowOption2, flowCompra, flowCompra2, flowCompra3, flowZapatera, flowOption3, flowCompraO, flowCompraV]); // Asegúrate de que esto sea un array
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main() 
