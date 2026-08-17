import { icon } from '../utils/icons.js'

export function ServicesShowcase(services) {
  const cards = services.map((service) => `
    <article class="service-card" tabindex="0" aria-expanded="false">
      <img src="${service.image}" alt="${service.name}" loading="lazy" />
      <span class="service-card-shade"></span>
      <div class="service-card-content">
        <h3>${service.name}</h3>
        <div class="service-card-details">
          <p>${service.description}</p>
          <div class="service-card-action-slot"></div>
          <template class="service-card-action-template">
            <a class="service-card-action" href="#/servicio/${service.id}">
              Ver más ${icon('arrow')}
            </a>
          </template>
        </div>
      </div>
    </article>
  `).join('')

  return `
    <section id="servicios" class="content-section services-showcase-section" aria-labelledby="services-title">
      <div class="section-heading">
        <h2 id="services-title">Nuestros <span>servicios</span></h2>
      </div>
      <div class="services-card-grid">${cards}</div>
    </section>
  `
}

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

export function Contact({ services }) {
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.205144081373!2d-99.13846369604799!3d19.429570335690862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92af577b44b%3A0xdb290ed58ba64e40!2sAlameda%20Central!5e0!3m2!1ses-419!2smx!4v1786993366131!5m2!1ses-419!2smx"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Ubicación de ÁREA cerca de Alameda Central"
          ></iframe>
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
