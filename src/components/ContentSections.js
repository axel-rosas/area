import { icon } from '../utils/icons.js'

export function Benefits(benefits) {
  const items = benefits.map((benefit) => `
    <article class="benefit-card">${icon(benefit.icon)}<p>${benefit.label}</p></article>
  `).join('')

  return `
    <section id="nosotros" class="content-section benefits-section">
      <div class="section-heading split-heading">
        <h2>¿Por qué <span>elegirnos</span>?</h2>
        <a href="#/nosotros">Más sobre Área</a>
      </div>
      <div class="benefit-grid">${items}</div>
    </section>
  `
}

export function Testimonials(testimonials) {
  const cards = testimonials.map((testimonial) => `
    <article class="testimonial-card">
      <h3>${testimonial.name}</h3>
      <p class="testimonial-company">${testimonial.company}</p>
      <blockquote>${testimonial.quote}</blockquote>
      <a href="#/proyecto/${testimonial.projectSlug}">Proyecto</a>
    </article>
  `).join('')

  return `
    <section class="content-section testimonials-section" aria-labelledby="testimonials-title">
      <div class="section-heading split-heading">
        <h2 id="testimonials-title">La experiencia de <span>nuestros clientes</span></h2>
        <a href="#/portafolio">Conoce nuestro portafolio</a>
      </div>
      <div class="testimonial-grid">${cards}</div>
    </section>
  `
}

export function Contact({ services, contactMap }) {
  const options = services.map((service) => `<option value="${service.id}">${service.name}</option>`).join('')

  return `
    <section id="contacto" class="content-section contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Hablemos de <span>tu proyecto</span></h2>
      <div class="contact-layout">
        <div class="contact-copy">
          <p class="contact-lead">El <span>primer paso</span> puede ser una buena conversación.</p>
          <p>Cuéntanos qué necesitas. Te responderemos con una ruta clara para <span>comenzar</span>.</p>
        </div>
        <form class="contact-form" novalidate>
          <label><span>Nombre</span><input name="name" type="text" placeholder="Tu nombre" autocomplete="name" required /></label>
          <label><span>Correo</span><input name="email" type="email" placeholder="ejemplo@correo.com" autocomplete="email" required /></label>
          <label><span>Servicio</span><select name="service" required><option value="">Selecciona un servicio</option>${options}</select></label>
          <label><span>Proyecto</span><textarea name="project" rows="4" placeholder="Cuéntanos brevemente qué tienes en mente" required></textarea></label>
          <div class="form-footer"><p class="form-status" role="status"></p><button class="outline-button" type="submit">Enviar mensaje</button></div>
        </form>
        <div class="contact-location">
          <img src="${contactMap}" alt="Mapa de nuestra ubicación cerca del Centro Histórico" />
          <div class="contact-detail">${icon('pin')}<p>Una calle de un lugar de por ahí.</p></div>
          <div class="contact-detail">${icon('clock')}<p>Lunes a viernes<br />9:00 - 18:00</p></div>
          <div class="contact-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">${icon('instagram')}</a>
            <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">${icon('whatsapp')}</a>
            <a href="mailto:hola@area.mx" aria-label="Correo electrónico">${icon('mail')}</a>
          </div>
        </div>
      </div>
    </section>
  `
}
