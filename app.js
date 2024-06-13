const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');
const path = require('path');
const fs = require('fs');

const menuPath = path.join(__dirname, "mensajes", "menu.txt");
const menu = fs.readFileSync(menuPath, "utf8");
const opcion1Path = path.join(__dirname, "mensajes", "opcion1.txt");
const opcion1 = fs.readFileSync(opcion1Path, "utf8");
const opcion2Path = path.join(__dirname, "mensajes", "opcion2.txt");
const opcion2 = fs.readFileSync(opcion2Path, "utf8");
const saludoPath = path.join(__dirname, "mensajes", "saludo.txt");
const saludo = fs.readFileSync(saludoPath, "utf8");
const invalidoPath = path.join(__dirname, "mensajes", "invalido.txt");
const invalido = fs.readFileSync(invalidoPath, "utf8");

const flowCompra = addKeyword(EVENTS.ACTION)
.addAnswer('🛒 Este link te llevará a nuestro grupo de compra:  https://chat.whatsapp.com/CwcKwfpVwydHjfux6SGwgl', {
    delay: 4000
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
.addAnswer('🛒 Este link te llevará a nuestro grupo de compra:  https://chat.whatsapp.com/CPoHovx2WAy94tRdMeMujx', {
    delay: 4000
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
    delay: 4000
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.1.jpeg?v=1718048350155'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.2.jpeg?v=1718049348188'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.3.jpeg?v=1718073418151'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.4.jpeg?v=1718073417611'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.5.jpeg?v=1718073427349'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.6.jpeg?v=1718073426662'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/1.7.jpeg?v=1718073426046'
})
.addAnswer(opcion1
    ,
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["1", "2"].includes(ctx.body)) {
            return fallBack(
                "Respuesta no válida, por favor selecciona una de las opciones: 1 o 2."
            );
        }
        switch (ctx.body) {
            case "1":
                return gotoFlow(flowCompra);
            case "2":
                return gotoFlow(flowOption2);
        }
    }
);

const flowOption2 = addKeyword(EVENTS.ACTION)
.addAnswer('¡Perfecto! Te comparto todos los detalles del modelo, incluyendo medidas y precio 😊. Aquí tienes las imágenes del producto 📸:', {
    delay: 4000
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.1.jpeg?v=1718048353264'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.2.jpeg?v=1718049344735'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.3.jpeg?v=1718073424146'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.4.jpeg?v=1718073423542'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.5.jpeg?v=1718073422969'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.6.jpeg?v=1718073422286'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.7.jpeg?v=1718073421684'
})
.addAnswer(' ', {
    media: 'https://cdn.glitch.global/23403b3f-430c-4936-88ba-d11c5d481cf3/2.8.jpeg?v=1718073421094'
})
.addAnswer(opcion2
    ,
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!["1", "2"].includes(ctx.body)) {
            return fallBack(
                "Respuesta no válida, por favor selecciona una de las opciones: 1 o 2."
            );
        }
        switch (ctx.body) {
            case "1":
                return gotoFlow(flowCompra2);
            case "2":
                return gotoFlow(flowOption1);
        }
    }
);

const flowPrincipal = addKeyword(['Hola', 'informacion','InformaciÓn','información','Informacion'])
.addAnswer(saludo, {
    delay: 4000,
})
.addAnswer(' ', {
    delay: 2000,
    media: 'https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/1.jpeg?v=1718045558493'
})
.addAnswer(' ', {
    delay: 2000,
    media: 'https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/2.jpeg?v=1718045557949'
})
.addAnswer(
        menu,
        { capture: true },
        async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
            if (!["1", "2"].includes(ctx.body)) {
                return fallBack(
                    invalido
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(flowOption1);
                case "2":
                    return gotoFlow(flowOption2);
            }
        }
);

const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal, flowOption1, flowOption2, flowCompra, flowCompra2]); // Asegúrate de que esto sea un array
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()  