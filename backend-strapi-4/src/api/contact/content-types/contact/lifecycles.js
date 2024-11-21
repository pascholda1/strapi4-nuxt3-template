module.exports = {
  async afterCreate(event) {    // Connected to "Save" button in admin panel
    const {result} = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: ['simon@pascholda.one'],
        // to: ['simon@pascholda.one', 'heike66@t-online.de'],
        from: 'contact@mein-leben.de', // e.g. single sender verification in SendGrid
        // replyTo: 'heike@mein-leben.de',
        subject: 'Neue Kontaktanfrage!',
        text: `
Vorname: ${result.firstName}\n
Nachname: ${result.lastName}\n
E-Mail: ${result.email}\n
Nachricht: ${result.message}
        `,
        // language=html
        html: `
			Vorname: ${result.firstName}<br>
			Nachname: ${result.lastName}<br>
			E-Mail: ${result.email}<br>
			Nachricht: ${result.message}
        `,

      });
    } catch (err) {
      console.log(err);
    }
  },
};
