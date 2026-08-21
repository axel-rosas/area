/**
 * SECCIONES REUTILIZABLES DE CONTENIDO
 *
 * Se agrupan aquí porque son funciones de presentación pequeñas, sin estado y
 * construidas con el mismo patrón: reciben datos y devuelven HTML. Separarlas de
 * `app.js` evita que el enrutador conozca el detalle de cada etiqueta.
 */

// Ruta `../utils/icons.js`: sube de `components` a `src` y entra en `utils`.
import { icon } from "../utils/icons.js";

/** @param {Array<object>} services @returns {string} Tarjetas de servicios. */
export function ServicesShowcase(services) {
  // Cada objeto se transforma en `<article>` accesible por teclado (`tabindex`);
  // `join('')` combina luego el array sin insertar comas entre las tarjetas.
  const cards = services
    .map(
      (service) => `
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
              Ver más ${icon("arrow")}
            </a>
          </template>
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  // El `<template>` de cada tarjeta permanece inerte hasta que `app.js` lo clona.
  return `
    <section id="servicios" class="content-section services-showcase-section" aria-labelledby="services-title">
      <div class="section-heading">
        <h2 id="services-title">Nuestros <span>servicios</span></h2>
      </div>
      <div class="services-card-grid">${cards}</div>
    </section>
  `;
}

/** @param {Array<object>} benefits @returns {string} Beneficios del estudio. */
export function Benefits(benefits) {
  // El nombre lógico del icono se resuelve en `utils/icons.js`.
  const items = benefits
    .map(
      (benefit) => `
    <article class="benefit-card">${icon(benefit.icon)}<p>${benefit.label}</p></article>
  `,
    )
    .join("");

  return `
    <section id="nosotros" class="content-section benefits-section">
      <div class="section-heading split-heading">
        <h2>¿Por qué <span>elegirnos</span>?</h2>
        <a href="#/nosotros">Más sobre Área</a>
      </div>
      <div class="benefit-grid">${items}</div>
    </section>
  `;
}

/** @param {Array<object>} testimonials @returns {string} Testimonios de clientes. */
export function Testimonials(testimonials) {
  // `projectSlug` crea una relación navegable hacia el proyecto citado.
  const cards = testimonials
    .map(
      (testimonial) => `
    <article class="testimonial-card">
      <h3>${testimonial.name}</h3>
      <p class="testimonial-company">${testimonial.company}</p>
      <blockquote>${testimonial.quote}</blockquote>
      <a href="#/proyecto/${testimonial.projectSlug}">Proyecto</a>
    </article>
  `,
    )
    .join("");

  return `
    <section class="content-section testimonials-section" aria-labelledby="testimonials-title">
      <div class="section-heading split-heading">
        <h2 id="testimonials-title">La experiencia de <span>nuestros clientes</span></h2>
        <a href="#/portafolio">Conoce nuestro portafolio</a>
      </div>
      <div class="testimonial-grid">${cards}</div>
    </section>
  `;
}

/**
 * Genera la sección de contacto compartida por varias páginas.
 * @param {{services: Array<object>}} data - Se desestructura para usar `services`.
 * @returns {string} Formulario, cobertura y datos de contacto.
 */
export function Contact({ services }) {
  // Crea opciones de `<select>` a partir de la misma fuente de datos del resto del sitio.
  const options = services
    .map((service) => `<option value="${service.id}">${service.name}</option>`)
    .join("");

  // `novalidate` impide la validación automática al enviar; `app.js` llama
  // explícitamente `checkValidity`/`reportValidity` para controlar el mensaje.
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
          <div class="contact-coverage">
            ${icon("pin")}
            <div>
              <p class="contact-coverage-label">Cobertura nacional</p>
              <p>Ofrecemos nuestros servicios en toda la República Mexicana.</p>
            </div>
          </div>
          <div class="contact-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">${icon("instagram")}</a>
            <a href="https://www.facebook.com/people/%C3%81REA-Arquitectura-Dise%C3%B1o/100063890827340/" target="_blank" rel="noreferrer" aria-label="Facebook">
            ${icon("facebook")}</a>
            <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">${icon("whatsapp")}</a>
            <a href="mailto:hola@somosarea.com.mx" aria-label="Correo electrónico">
            ${icon("mail")}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
