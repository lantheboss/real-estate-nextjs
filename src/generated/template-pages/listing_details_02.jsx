/* eslint-disable */

import { TemplatePageShell } from "@/components/template-page-shell";

export const metadata = {
  title: "Plantilla y Panel de Control de Home Real Estate para Next.js",
  description: "Home Real Estate es una plantilla moderna de Next.js diseñada para agencias inmobiliarias.",
  keywords: ["Bienes raíces","Venta de propiedades","Compra de propiedades"],
};

const scripts = [
  "/vendor/jquery.min.js",
  "/vendor/bootstrap/js/bootstrap.bundle.min.js",
  "/vendor/wow/wow.min.js",
  "/vendor/slick/slick.min.js",
  "/vendor/fancybox/fancybox.umd.js",
  "/vendor/jquery.lazy.min.js",
  "/vendor/jquery.counterup.min.js",
  "/vendor/jquery.waypoints.min.js",
  "/vendor/nice-select/jquery.nice-select.min.js",
  "/vendor/validator.js",
  "/vendor/isotope.pkgd.min.js",
  "/js/theme.js"
];

export default function TemplatePage() {
  return (
    <TemplatePageShell scripts={scripts}>
    <div className="main-page-wrapper">

    		<div id="preloader">
    			<div id="ctn-preloader" className="ctn-preloader">
    				<div className="icon"><img src="/images/loader.gif" alt="" className="m-auto d-block" width="64" /></div>
    			</div>
    		</div>




    		<header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
    			<div className="inner-content gap-one">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center justify-content-between">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo.svg" alt="" />
    							</a>
    						</div>

    						<div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
    							<ul className="d-flex align-items-center style-none">
    								<li>
    									<a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one"><i className="fa-regular fa-lock"></i> <span>Iniciar sesión</span></a>
                                    </li>
    								<li className="d-none d-md-inline-block ms-3">
                                        <a href="/dashboard/add-property" className="btn-two" target="_blank" rel="noopener noreferrer"><span>Agregar Anuncio</span> <i className="fa-thin fa-arrow-up-right"></i></a>
                                    </li>
    							</ul>
    						</div>
    						<nav className="navbar navbar-expand-lg p0 order-lg-2">
    							<button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
    								data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    								aria-label="Toggle navigation">
    								<span></span>
    							</button>
    							<div className="collapse navbar-collapse" id="navbarNav">
    								<ul className="navbar-nav align-items-lg-center">
    									<li className="d-block d-lg-none"><div className="logo"><a href="/" className="d-block"><img src="/images/logo/logo.svg" alt="" /></a></div></li>
    									<li className="nav-item dashboard-menu">
    										<a className="nav-link" href="/dashboard/dashboard-index" target="_blank" rel="noopener noreferrer">Panel de Control</a>
    									</li>
    									<li className="nav-item dropdown">
    										<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    											data-bs-auto-close="outside" aria-expanded="false">Inicio
    										</a>
    										<ul className="dropdown-menu">
    											<li><a href="/" className="dropdown-item"><span>Inicio 01</span></a></li>
    											<li><a href="/index-2" className="dropdown-item"><span>Inicio 02</span></a></li>
    											<li><a href="/index-3" className="dropdown-item"><span>Inicio 03</span></a></li>
    											<li><a href="/index-4" className="dropdown-item"><span>Inicio 04</span></a></li>
    											<li><a href="/index-5" className="dropdown-item"><span>Inicio 05</span></a></li>
    											<li><a href="/index-6" className="dropdown-item"><span>Inicio 06</span></a></li>
    											<li><a href="/index-7" className="dropdown-item"><span>Inicio 07</span></a></li>
    										</ul>
    									</li>
    									<li className="nav-item dropdown mega-dropdown-sm">
    							        	<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Anuncios
    										</a>
    						                <ul className="dropdown-menu">
    							                <li className="row gx-1">
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Tipo de Anuncio</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_01" className="dropdown-item"><span>Cuadrícula con Barra Lateral-1</span></a></li>
    															<li><a href="/listing_05" className="dropdown-item"><span>Cuadrícula con Barra Lateral-2</span></a></li>
    															<li><a href="/listing_02" className="dropdown-item"><span>Lista con Barra Lateral-1</span></a></li>
    															<li><a href="/listing_06" className="dropdown-item"><span>Lista con Barra Lateral-2</span></a></li>
    															<li><a href="/listing_03" className="dropdown-item"><span>Cuadrícula con Filtro Superior-1</span></a></li>
    															<li><a href="/listing_07" className="dropdown-item"><span>Cuadrícula con Filtro Superior-2</span></a></li>
    															<li><a href="/listing_04" className="dropdown-item"><span>Lista con Filtro Superior-1</span></a></li>
    															<li><a href="/listing_08" className="dropdown-item"><span>Lista con Filtro Superior-2</span></a></li>
    															<li><a href="/listing_09" className="dropdown-item"><span>Cuadrícula con Filtro Banner-1</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Tipo de Anuncio</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_11" className="dropdown-item"><span>Cuadrícula con Filtro Banner-2</span></a></li>
    															<li><a href="/listing_10" className="dropdown-item"><span>Lista con Filtro Banner-1</span></a></li>
    															<li><a href="/listing_12" className="dropdown-item"><span>Lista con Filtro Banner-2</span></a></li>
    															<li><a href="/listing_13" className="dropdown-item"><span>Cuadrícula a Ancho Completo</span></a></li>
    															<li><a href="/listing_14" className="dropdown-item"><span>Cuadrícula a Ancho Completo con Mapa-1</span></a></li>
    															<li><a href="/listing_16" className="dropdown-item"><span>Cuadrícula a Ancho Completo con Mapa-2</span></a></li>
    															<li><a href="/listing_15" className="dropdown-item"><span>Lista a Ancho Completo con Mapa-1</span></a></li>
    															<li><a href="/listing_17" className="dropdown-item"><span>Lista a Ancho Completo con Mapa-2</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Anuncio Individual</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_details_01" className="dropdown-item"><span>Detalles del Anuncio-1</span></a></li>
    															<li><a href="/listing_details_02" className="dropdown-item"><span>Detalles del Anuncio-2</span></a></li>
    															<li><a href="/listing_details_03" className="dropdown-item"><span>Detalles del Anuncio-3</span></a></li>
    															<li><a href="/listing_details_04" className="dropdown-item"><span>Detalles del Anuncio-4</span></a></li>
    															<li><a href="/listing_details_05" className="dropdown-item"><span>Detalles del Anuncio-5</span></a></li>
    															<li><a href="/listing_details_06" className="dropdown-item"><span>Detalles del Anuncio-6</span></a></li>
    														</ul>
    													</div> 
    												</div>
    											</li>
    						                </ul>
    						            </li>
    									<li className="nav-item dropdown mega-dropdown-sm">
    										<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    											data-bs-auto-close="outside" aria-expanded="false">Páginas
    										</a>
    										<ul className="dropdown-menu">
    							                <li className="row gx-1">
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Esenciales</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/about_us_01" className="dropdown-item"><span>Sobre nosotros -1</span></a></li>
    															<li><a href="/about_us_02" className="dropdown-item"><span>Sobre nosotros -2</span></a></li>
    															<li><a href="/agency" className="dropdown-item"><span>Agencia</span></a></li>
    															<li><a href="/agency_details" className="dropdown-item"><span>Detalles de la Agencia</span></a></li>
    															<li><a href="/agent" className="dropdown-item"><span>Agente</span></a></li>
    															<li><a href="/agent_details" className="dropdown-item"><span>Detalles del Agente</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Características</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/project_01" className="dropdown-item"><span>Proyecto -1</span></a></li>
    															<li><a href="/project_02" className="dropdown-item"><span>Proyecto -2</span></a></li>
    															<li><a href="/project_03" className="dropdown-item"><span>Proyecto -3</span></a></li>
    															<li><a href="/project_04" className="dropdown-item"><span>Proyecto -4</span></a></li>
    															<li><a href="/project_details_01" className="dropdown-item"><span>Detalles del Proyecto</span></a></li>
    															<li><a href="/service_01" className="dropdown-item"><span>Servicios -1</span></a></li>
    															<li><a href="/service_02" className="dropdown-item"><span>Servicios -2</span></a></li>
    															<li><a href="/service_details" className="dropdown-item"><span>Detalles del Servicio</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Otros</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/compare" className="dropdown-item"><span>Comparar Propiedades</span></a></li>
    															<li><a href="/pricing_01" className="dropdown-item"><span>Precios -1</span></a></li>
    															<li><a href="/pricing_02" className="dropdown-item"><span>Precios -2</span></a></li>
    															<li><a href="/contact" className="dropdown-item"><span>Contáctanos</span></a></li>
    															<li><a href="/faq" className="dropdown-item"><span>Preguntas Frecuentes</span></a></li>
    															<li><a href="/404" className="dropdown-item"><span>Error 404</span></a></li>
    														</ul>
    													</div> 
    												</div>
    											</li>
    						                </ul>
    									</li>
    									<li className="nav-item dropdown">
    										<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    											data-bs-auto-close="outside" aria-expanded="false">Blog
    										</a>
    										<ul className="dropdown-menu">
    											<li><a href="/blog_01" className="dropdown-item"><span>Cuadrícula del Blog</span></a></li>
    											<li><a href="/blog_02" className="dropdown-item"><span>Lista del Blog</span></a></li>
    											<li><a href="/blog_03" className="dropdown-item"><span>Blog 2 columnas</span></a></li>
    											<li><a href="/blog_details" className="dropdown-item"><span>Detalles del Blog</span></a></li>
    										</ul>
    									</li>
    									<li className="d-md-none ps-2 pe-2 mt-20">
    										<a href="/dashboard/add-property" className="btn-two w-100" target="_blank" rel="noopener noreferrer"><span>Agregar Anuncio</span> <i className="fa-thin fa-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="listing-details-one theme-details-one bg-pink pt-120 lg-pt-100 pb-150 xl-pb-120">
                <div className="video-wrapper">
                    <video preload="" muted="muted" playsinline="" autoplay="" loop="">
                        <source src="https://creativegigstf.com/video/intro_4.mp4" type="video/mp4" />
                      </video>
                </div> 
    			<div className="container">
                    <div className="bg-white shadow4 border-20 p-40 mt-70 lg-mt-50 mb-60">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="property-titlee">Apartamentos de Lujo en California.</h3>
                                <div className="d-flex flex-wrap mt-10">
                                    <div className="list-type text-uppercase border-20 mt-15 me-3">EN VENTA</div>
                                    <div className="address mt-15"><i className="bi bi-geo-alt"></i> 3891 Ranchview Dr. Richardson, California</div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <div className="d-inline-block md-mt-40">
                                    <div className="price color-dark fw-500">Precio: $1,67,000</div>
                                    <div className="est-price fs-20 mt-25 mb-35 md-mb-30">Pago Est. <span className="fw-500 color-dark">$8,343/mes*</span></div>
                                    <ul className="style-none d-flex align-items-center action-btns">
                                        <li className="me-auto fw-500 color-dark"><i className="fa-sharp fa-regular fa-share-nodes me-2"></i> Compartir</li>
                                        <li><a href="#" className="d-flex align-items-center justify-content-center rounded-circle tran3s"><i className="fa-light fa-heart"></i></a></li>
                                        <li><a href="#" className="d-flex align-items-center justify-content-center rounded-circle tran3s"><i className="fa-light fa-bookmark"></i></a></li>
                                        <li><a href="#" className="d-flex align-items-center justify-content-center rounded-circle tran3s"><i className="fa-light fa-circle-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="property-feature-list border-top mt-70 lg-mt-50 pt-60 lg-pt-30 pb-30 lg-pb-10">
                            <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_47.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Pies² . 3,720</span>
                                </li>
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_48.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Dorm . 03</span>
                                </li>
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_49.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Baños . 2</span>
                                </li>
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_50.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Cocina . 01</span>
                                </li>
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_51.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Tipo . Apartamento</span>
                                </li>
                            </ul>
                        </div>

                    </div>


    				<div className="row">
    					<div className="col-xl-8">
    						<div className="property-overview bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Descripción General</h4>
    							<p className="fs-20 lh-lg">Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.</p>
    						</div>

    						<div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Características de la Propiedad</h4>
    							<p className="fs-20 lh-lg">La gestión de riesgos y el cumplimiento, cuando se abordan estratégicamente, tienen el potencial de ir más allá de mitigar amenazas.</p>

    							<div className="accordion-style-two mt-45">
    								<div className="accordion" id="accordionTwo">
    									<div className="accordion-item">
    										<h2 className="accordion-header">
    											<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneA" aria-expanded="false" aria-controls="collapseOneA">
    												Detalles de la Propiedad
    											</button>
    										  </h2>
    										<div id="collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionTwo">
    											<div className="accordion-body">
    												<div className="feature-list-two">
    													<ul className="style-none d-flex flex-wrap justify-content-between">
    														<li><span>Dormitorios: </span> <span className="fw-500 color-dark">03</span></li>
    														<li><span>Amueblado: </span> <span className="fw-500 color-dark">Semi amueblado</span></li>
    														<li><span>Baños: </span> <span className="fw-500 color-dark">02</span></li>
    														<li><span>Año de Construcción: </span> <span className="fw-500 color-dark">2010</span></li>
    														<li><span>Piso: </span> <span className="fw-500 color-dark">Planta baja</span></li>
    														<li><span>Garaje: </span> <span className="fw-500 color-dark">03</span></li>
    														<li><span>Altura del Techo: </span> <span className="fw-500 color-dark">3.2m</span></li>
    														<li><span>Tipo de Propiedad: </span> <span className="fw-500 color-dark">Apartamento</span></li>
    														<li><span>Renovación: </span> <span className="fw-500 color-dark">3.2m</span></li>
    														<li><span>Estado: </span> <span className="fw-500 color-dark">En Venta</span></li>
    													</ul>
    												</div>

    											</div>
    										</div>
    									</div>
    									<div className="accordion-item">
    										<h2 className="accordion-header">
    											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoA" aria-expanded="false" aria-controls="collapseTwoA">
    												Detalles de Servicios
    											</button>
    										</h2>
    										<div id="collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionTwo">
    											<div className="accordion-body">
    												<div className="feature-list-two">
    													<ul className="style-none d-flex flex-wrap justify-content-between">
    														<li><span>Calefacción: </span> <span className="fw-500 color-dark">Gas natural </span></li>
    														<li><span>Intercomunicador: </span> <span className="fw-500 color-dark">Sí</span></li>
    														<li><span>Aire Acondicionado: </span> <span className="fw-500 color-dark">Sí</span></li>
    														<li><span>Tipo de Ventana: </span> <span className="fw-500 color-dark">Marco de aluminio </span></li>
    														<li><span>Chimenea: </span> <span className="fw-500 color-dark">--</span></li>
    														<li><span>TV por Cable:  </span> <span className="fw-500 color-dark">--</span></li>
    														<li><span>Ascensor: </span> <span className="fw-500 color-dark">Sí</span></li>
    														<li><span>WiFi: </span> <span className="fw-500 color-dark">Sí</span></li>
    														<li><span>Ventilación: </span> <span className="fw-500 color-dark">Sí</span></li>
    													</ul>
    												</div>

    											</div>
    										</div>
    									</div>
    									<div className="accordion-item">
    										<h2 className="accordion-header">
    											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeA" aria-expanded="true" aria-controls="collapseThreeA">
    												Características Exteriores
    											</button>
    										</h2>
    										<div id="collapseThreeA" className="accordion-collapse collapse" data-bs-parent="#accordionTwo">
    											<div className="accordion-body">
    												<div className="feature-list-two">
    													<ul className="style-none d-flex flex-wrap justify-content-between">
    														<li><span>Garaje: </span> <span className="fw-500 color-dark">Sí</span></li>
    														<li><span>Estacionamiento: </span> <span className="fw-500 color-dark">Sí</span></li>
    														<li><span>Jardín: </span> <span className="fw-500 color-dark">30m2</span></li>
    														<li><span>Acceso para Discapacitados: </span> <span className="fw-500 color-dark">Rampa</span></li>
    														<li><span>Piscina: </span> <span className="fw-500 color-dark">--</span></li>
    														<li><span>Cerca: </span> <span className="fw-500 color-dark">--</span></li>
    														<li><span>Seguridad: </span> <span className="fw-500 color-dark">3 Cámaras</span></li>
    														<li><span>Apto para Mascotas: </span> <span className="fw-500 color-dark">Sí</span></li>
    													</ul>
    												</div>

    											</div>
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>

    						<div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Comodidades</h4>
    							<p className="fs-20 lh-lg pb-25">La gestión de riesgos y el cumplimiento, cuando se abordan estratégicamente, tienen el potencial</p>
    							<ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
    								<li>Aire acondicionado y calefacción</li>
    								<li>Garajes</li>
    								<li>Piscina</li>
    								<li>Estacionamiento</li>
    								<li>Jardín</li>
    								<li>Acceso para discapacitados</li>
    								<li>Apto para mascotas</li>
    								<li>Altura del techo</li>
    								<li>Refrigerador</li>
    								<li>Chimenea</li>
    								<li>Ascensor</li>
    								<li>Wifi</li>
    							</ul>

    						</div>


    						<div className="property-video-tour mb-50">
    							<h4 className="mb-40">Tour en Video</h4>
    							<div className="bg-white shadow4 border-20 p-15">
    								<div className="position-relative border-15 image-bg overflow-hidden z-1">
    									<img src="/images/lazy.svg" data-src="/images/listing/img_47.jpg" alt="" className="lazy-img w-100" />
    									<a className="video-icon tran3s rounded-circle d-flex align-items-center justify-content-center" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
    										<i className="fa-thin fa-play"></i>
    									</a>
    								</div>
    							</div>
    						</div>


    						<div className="property-floor-plan mb-50">
    							<h4 className="mb-40">Planos de Planta</h4>
    							<div className="bg-white shadow4 border-20 p-30">
    								<div id="floor-plan" className="carousel slide">
    									<div className="carousel-indicators">
    										<button type="button" data-bs-target="#floor-plan" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    									  	<button type="button" data-bs-target="#floor-plan" data-bs-slide-to="1" aria-label="Slide 2"></button>
    									  	<button type="button" data-bs-target="#floor-plan" data-bs-slide-to="2" aria-label="Slide 3"></button>
    									</div>
    									<div className="carousel-inner">
    										<div className="carousel-item active">
    											<img src="/images/listing/floor_1.jpg" alt="" className="w-100" />
    									  	</div>
    									  	<div className="carousel-item">
    											<img src="/images/listing/floor_2.jpg" alt="" className="w-100" />
    									  	</div>
    									  	<div className="carousel-item">
    											<img src="/images/listing/floor_1.jpg" alt="" className="w-100" />
    									 	</div>
    									</div>
    								</div>
    							</div>
    						</div>


    						<div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Qué Hay Cerca</h4>
    							<p className="fs-20 lh-lg pb-30">La gestión de riesgos y el cumplimiento, cuando se abordan estratégicamente, tienen el potencial de ir más allá de mitigar amenazas.</p>
    							<ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
    								<li>Escuela y Universidad: <span className="fw-500 color-dark">0.9km</span></li>
    								<li>Centro de Abarrotes: <span className="fw-500 color-dark">0.2km</span></li>
    								<li>Estación de Metro:  <span className="fw-500 color-dark">0.7km</span></li>
    								<li>Gimnasio: <span className="fw-500 color-dark">2.3km</span></li>
    								<li>Universidad: <span className="fw-500 color-dark">2.7km</span></li>
    								<li>Hospital: <span className="fw-500 color-dark">1.7km</span></li>
    								<li>Centro Comercial: <span className="fw-500 color-dark">1.1m</span></li>
    								<li>Estación de Policía: <span className="fw-500 color-dark">1.2m</span></li>
    								<li>Estación de Autobús:  <span className="fw-500 color-dark"> 1.1m</span></li>
    								<li>Río: <span className="fw-500 color-dark">3.1km</span></li>
    								<li>Mercado: <span className="fw-500 color-dark">3.4m</span></li>
    							</ul>

    						</div>


    						<div className="similar-property">
    							<h4 className="mb-40">Casas Similares Que Te Pueden Gustar</h4>
    							<div className="similar-listing-slider-one">
    								<div className="item">
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">EN ALQUILER</div>
    												<img src="/images/listing/img_13.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img1" data-caption="Villa Blueberry"></a>
    													<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img1" data-caption="Villa Blueberry"></a>
    													<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img1" data-caption="Villa Blueberry"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info pe-4 ps-4">
    											<a href="/listing_details_03" className="title tran3s">Villa Blueberry.</a>
    											<div className="address m0 pb-5">Mirpur 10, Stadium dhaka</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
    												<strong className="price fw-500 color-dark">$34,900</strong>
    												<ul className="style-none d-flex action-icons">
    													<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    												</ul>
    											</div>
    										</div>

    									</div>

    								</div>
    								<div className="item">
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">EN VENTA</div>
    												<img src="/images/listing/img_14.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img2" data-caption="Villa White House"></a>
    													<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img2" data-caption="Villa White House"></a>
    													<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img2" data-caption="Villa White House"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info pe-4 ps-4">
    											<a href="/listing_details_03" className="title tran3s">Villa Blueberry.</a>
    											<div className="address m0 pb-5">California link road, ca, usa</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
    												<strong className="price fw-500 color-dark">$28,100</strong>
    												<ul className="style-none d-flex action-icons">
    													<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    												</ul>
    											</div>
    										</div>

    									</div>

    								</div>
    								<div className="item">
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">EN VENTA</div>
    												<img src="/images/listing/img_15.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    												<div className="img-slider-btn">
    													04 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img3" data-caption="Villa de lujo en Dal lake."></a>
    													<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img3" data-caption="Villa de lujo en Dal lake."></a>
    													<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img3" data-caption="Villa de lujo en Dal lake."></a>
    													<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img3" data-caption="Villa de lujo en Dal lake."></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info pe-4 ps-4">
    											<a href="/listing_details_03" className="title tran3s">Villa Blueberry.</a>
    											<div className="address m0 pb-5">Mirpur 10, Stadium</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
    												<strong className="price fw-500 color-dark">$42,500</strong>
    												<ul className="style-none d-flex action-icons">
    													<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    												</ul>
    											</div>
    										</div>

    									</div>

    								</div>
    								<div className="item">
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">EN VENTA</div>
    												<img src="/images/listing/img_16.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    												<div className="img-slider-btn">
    													04 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img4" data-caption="Casa South Sun"></a>
    													<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img4" data-caption="Casa South Sun"></a>
    													<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img4" data-caption="Casa South Sun"></a>
    													<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img4" data-caption="Casa South Sun"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info pe-4 ps-4">
    											<a href="/listing_details_03" className="title tran3s">Casa South Sun</a>
    											<div className="address m0 pb-5">Mirpur 10, Stadium</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
    												<strong className="price fw-500 color-dark">$55,500</strong>
    												<ul className="style-none d-flex action-icons">
    													<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    												</ul>
    											</div>
    										</div>

    									</div>

    								</div>
    								<div className="item">
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">EN VENTA</div>
    												<img src="/images/listing/img_14.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img5" data-caption="Villa White House"></a>
    													<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img5" data-caption="Villa White House"></a>
    													<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img5" data-caption="Villa White House"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info pe-4 ps-4">
    											<a href="/listing_details_03" className="title tran3s">Villa White House</a>
    											<div className="address m0 pb-5">California link road, ca, usa</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
    												<strong className="price fw-500 color-dark">$28,100</strong>
    												<ul className="style-none d-flex action-icons">
    													<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    												</ul>
    											</div>
    										</div>

    									</div>

    								</div>
    							</div>
    						</div>


    						<div className="property-score bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Puntuación de Caminabilidad</h4>
    							<p className="fs-20 lh-lg pb-30">La gestión de riesgos y el cumplimiento, cuando se abordan estratégicamente, tienen el potencial</p>
    							<div className="row">
    								<div className="col-md-6">
    									<div className="block d-flex align-items-center mb-50 sm-mb-30">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_52.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h6>Puntuación de Transporte</h6>
    											<p className="fs-16 m0"><span className="color-dark">63</span>/100 (Distancia Moderada Caminable)</p>
    										</div>
    									</div>
    								</div>
    								<div className="col-md-6">
    									<div className="block d-flex align-items-center mb-50 sm-mb-30">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_53.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h6>Puntuación Escolar</h6>
    											<p className="fs-16 m0"><span className="color-dark">70</span>/100 (Distancia Corta Caminable)</p>
    										</div>
    									</div>
    								</div>
    								<div className="col-md-6">
    									<div className="block d-flex align-items-center mb-20 sm-mb-30">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_54.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h6>Puntuación Médica</h6>
    											<p className="fs-16 m0"><span className="color-dark">77</span>/100 (Distancia Corta Caminable)</p>
    										</div>
    									</div>
    								</div>
    								<div className="col-md-6">
    									<div className="block d-flex align-items-center mb-20">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_55.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h6>Puntuación de Centro Comercial</h6>
    											<p className="fs-16 m0"><span className="color-dark">42</span>/100 (Distancia Larga Caminable)</p>
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>


    						<div className="property-location mb-50">
    							<h4 className="mb-40">Ubicación</h4>
    							<div className="bg-white shadow4 border-20 p-30">
    								<div className="map-banner overflow-hidden border-15">
    									<div className="gmap_canvas h-100 w-100">
    										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-100 h-100"></iframe>
    									</div>
    								</div>
    							</div>
    						</div>


    						<div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
    							<div className="position-relative z-1">
    								<div className="d-sm-flex justify-content-between align-items-center mb-10">
    									<h4 className="m0 xs-pb-30">Reseñas</h4>
    									<select className="nice-select">
    										<option value="0">Más reciente</option>
    										<option value="1">Más vendido</option>
    										<option value="2">Mejor coincidencia</option>
    									</select>
    								</div>
    								<div className="review-wrapper mb-35">
    									<div className="review">
    										<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Zubayer Al Hasan</h6>
    													<div className="time fs-16">17 Ago, 23</div>
    												</div>
    												<ul className="rating style-none d-flex xs-mt-10">
    													<li><span className="fst-italic me-2">(Calificación 4.7)</span> </li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    												</ul>
    											</div>
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</p>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Útil</span></a>
    												<a href="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Reportar</span></a>
    											</div>
    										</div>

    									</div>


    									<div className="review">
    										<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Rashed Kabir</h6>
    													<div className="time fs-16">13 Jun, 23</div>
    												</div>
    												<ul className="rating style-none d-flex xs-mt-10">
    													<li><span className="fst-italic me-2">(Calificación 4.9)</span> </li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    												</ul>
    											</div>
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</p>
    											<ul className="style-none d-flex flex-wrap review-gallery pb-30">
    												<li><a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="revImg" data-caption="Villa Duplex Orkit"><img src="/images/listing/img_48.jpg" alt="" /></a></li>
    												<li><a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="revImg" data-caption="Villa Duplex Orkit"><img src="/images/listing/img_49.jpg" alt="" /></a></li>
    												<li><a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="revImg" data-caption="Villa Duplex Orkit"><img src="/images/listing/img_50.jpg" alt="" /></a></li>
    												<li>
    													<div className="position-relative more-img">
    														<img src="/images/listing/img_50.jpg" alt="" />
    														<span>13+</span>
    														<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="revImg" data-caption="Villa Duplex Orkit."></a>
    														<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="revImg" data-caption="Villa Duplex Orkit."></a>
    														<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="revImg" data-caption="Villa Duplex Orkit."></a>
    													</div>
    												</li>
    											</ul>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Útil</span></a>
    												<a href="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Reportar</span></a>
    											</div>

    										</div>

    									</div>


    									<div className="review hide">
    										<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Perty Jinta</h6>
    													<div className="time fs-16">17 Ago, 23</div>
    												</div>
    												<ul className="rating style-none d-flex xs-mt-10">
    													<li><span className="fst-italic me-2">(Calificación 4.7)</span> </li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    												</ul>
    											</div>
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</p>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Útil</span></a>
    												<a href="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Reportar</span></a>
    											</div>
    										</div>

    									</div>

    								</div>

    								<div className="load-more-review text-uppercase w-100 border-15 tran3s">VER LAS 120 RESEÑAS <i className="bi bi-arrow-up-right"></i></div>
    							</div>						
    						</div>


    						<div className="review-form bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Deja una Respuesta</h4>
    							<p className="fs-20 lh-lg pb-15"><a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="color-dark fw-500 text-decoration-underline">Inicia sesión</a> para publicar tu comentario o regístrate si no tienes una cuenta.</p>

    							<form action="#">
    								<div className="row">
    									<div className="col-12">
    										<div className="input-box-two mb-30">
    											<div className="label">Título*</div>
    											<input type="text" placeholder="Rashed Kabir" className="type-input" />
    										</div>

    									</div>
    									<div className="col-lg-6">
    										<div className="input-box-two mb-30">
    											<div className="label">Correo electrónico*</div>
    											<input type="email" placeholder="rshdkabir@gmail.com" className="type-input" />
    										</div>

    									</div>
    									<div className="col-lg-6">
    										<div className="input-box-two mb-30">
    											<div className="label">Calificaciones*</div>
    											<select className="nice-select">
    												<option value="0">Calificaciones</option>
    												<option value="1">Cinco Estrellas</option>
    												<option value="1">Cuatro Estrellas</option>
    												<option value="1">Tres Estrellas</option>
    												<option value="1">Dos Estrellas</option>
    												<option value="1">Una Estrella</option>
    											</select>
    										</div>

    									</div>
    									<div className="col-12">
    										<div className="input-box-two mb-30">
    											<textarea placeholder="Escribe tu reseña aquí..."></textarea>
    										</div>

    									</div>
    								</div>
    								<button className="btn-five text-uppercase sm">Publicar Reseña</button>
    							</form>
    						</div>

    					</div>
    					<div className="col-xl-4 col-lg-8 me-auto ms-auto">
    						<div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 lg-mt-80">
    							<div className="agent-info bg-white border-20 p-30 mb-40">
    								<img src="/images/lazy.svg" data-src="/images/agent/img_06.jpg" alt="" className="lazy-img rounded-circle ms-auto me-auto mt-3 avatar" />
    								<div className="text-center mt-25">
    									<h6 className="name">Rashed Kabir</h6>
    									<p className="fs-16">Agente y Corredor de Propiedades</p>
    									<ul className="style-none d-flex align-items-center justify-content-center social-icon">
    										<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    										<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    										<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    										<li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
    									</ul>
    								</div>
    								<div className="divider-line mt-40 mb-45 pt-20">
    									<ul className="style-none">
    										<li>Ubicación: <span>España, Barcelona</span></li>
    										<li>Correo: <span><a href="mailto:akabirr770@gmail.com">akabirr770@gmail.com</a></span></li>
    										<li>Teléfono: <span><a href="tel:+12347687565">+12347687565</a></span></li>
    									</ul>
    								</div>

    								<a href="/contact" className="btn-nine text-uppercase rounded-3 w-100 mb-10">CONTACTAR AGENTE</a>
    							</div>


    							<div className="tour-schedule bg-white border-20 p-30 mb-40">
    								<h5 className="mb-40">Programar Visita</h5>
    								<form action="#">
    									<div className="input-box-three mb-25">
    										<div className="label">Tu Nombre*</div>
    										<input type="text" placeholder="Tu nombre completo" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Tu Correo Electrónico*</div>
    										<input type="email" placeholder="Ingresa tu correo" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Tu Teléfono*</div>
    										<input type="tel" placeholder="Tu número de teléfono" className="type-input" />
    									</div>

    									<div className="input-box-three mb-15">
    										<div className="label">Mensaje*</div>
    										<textarea placeholder="Hola, estoy interesado en [Apartamentos California]"></textarea>
    									</div>

    									<button className="btn-nine text-uppercase rounded-3 w-100 mb-10">CONSULTAR</button>
    								</form>
    							</div>


    							<div className="mortgage-calculator bg-white border-20 p-30 mb-40">
    								<h5 className="mb-40">Calculadora de Hipoteca</h5>
    								<form action="#">
    									<div className="input-box-three mb-25">
    										<div className="label">Precio de la Casa*</div>
    										<input type="tel" placeholder="1,32,789" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Pago Inicial*</div>
    										<input type="tel" placeholder="$" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Tasa de Interés*</div>
    										<input type="tel" placeholder="3.5%" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Plazo del Préstamo (Años)</div>
    										<input type="tel" placeholder="24" className="type-input" />
    									</div>

    									<button className="btn-five text-uppercase sm rounded-3 w-100 mb-10">CALCULAR</button>
    								</form>
    							</div>


    							<div className="feature-listing bg-white border-20 p-30">
    								<h5 className="mb-40">Anuncios Destacados</h5>
    								<div id="F-listing" className="carousel slide">
    									<div className="carousel-indicators">
    										<button type="button" data-bs-target="#F-listing" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    									  	<button type="button" data-bs-target="#F-listing" data-bs-slide-to="1" aria-label="Slide 2"></button>
    									  	<button type="button" data-bs-target="#F-listing" data-bs-slide-to="2" aria-label="Slide 3"></button>
    									</div>
    									<div className="carousel-inner">
    										<div className="carousel-item active">
    											<div className="listing-card-one style-three border-10">
    												<div className="img-gallery">
    													<div className="position-relative border-10 overflow-hidden">
    														<div className="tag bg-white text-dark fw-500 border-20">EN ALQUILER</div>
    														<a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
    														<img src="/images/listing/img_13.jpg" className="w-100 border-10" alt="..." />
    														<div className="img-slider-btn">
    															03 <i className="fa-regular fa-image"></i>
    															<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="imgA" data-caption="Villa Blueberry"></a>
    															<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="imgA" data-caption="Villa Blueberry"></a>
    															<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="imgA" data-caption="Villa Blueberry"></a>
    														</div>
    													</div>
    												</div>

    												<div className="property-info mt-15">
    													<div className="d-flex justify-content-between align-items-end">
    														<div>
    															<strong className="price fw-500 color-dark">$1,23,710</strong>
    															<div className="address m0 pt-5">120 Elgin St. Celina, Delaware </div>
    														</div>
    														<a href="#" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    													</div>
    												</div>

    											</div>

    									  	</div>
    									  	<div className="carousel-item">
    											<div className="listing-card-one style-three border-10">
    												<div className="img-gallery">
    													<div className="position-relative border-10 overflow-hidden">
    														<div className="tag bg-white text-dark fw-500 border-20">EN ALQUILER</div>
    														<a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
    														<img src="/images/listing/img_14.jpg" className="w-100 border-10" alt="..." />
    														<div className="img-slider-btn">
    															03 <i className="fa-regular fa-image"></i>
    															<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="imgB" data-caption="Villa Blueberry"></a>
    															<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="imgB" data-caption="Villa Blueberry"></a>
    															<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="imgB" data-caption="Villa Blueberry"></a>
    														</div>
    													</div>
    												</div>

    												<div className="property-info mt-15">
    													<div className="d-flex justify-content-between align-items-end">
    														<div>
    															<strong className="price fw-500 color-dark">$2,11,536</strong>
    															<div className="address m0 pt-5">120 Elgin St. Celina, Delaware </div>
    														</div>
    														<a href="#" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    													</div>
    												</div>

    											</div>

    									  	</div>
    									  	<div className="carousel-item">
    											<div className="listing-card-one style-three border-10">
    												<div className="img-gallery">
    													<div className="position-relative border-10 overflow-hidden">
    														<div className="tag bg-white text-dark fw-500 border-20">EN ALQUILER</div>
    														<a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
    														<img src="/images/listing/img_15.jpg" className="w-100 border-10" alt="..." />
    														<div className="img-slider-btn">
    															03 <i className="fa-regular fa-image"></i>
    															<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="imgC" data-caption="Villa Blueberry"></a>
    															<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="imgC" data-caption="Villa Blueberry"></a>
    															<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="imgC" data-caption="Villa Blueberry"></a>
    														</div>
    													</div>
    												</div>

    												<div className="property-info mt-15">
    													<div className="d-flex justify-content-between align-items-end">
    														<div>
    															<strong className="price fw-500 color-dark">$3,05,958</strong>
    															<div className="address m0 pt-5">120 Elgin St. Celina, Delaware </div>
    														</div>
    														<a href="#" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    													</div>
    												</div>

    											</div>

    									 	</div>
    									</div>
    								</div>
    							</div>

    						</div>

    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
    			<div className="container">
    				<div className="row align-items-center">
    					<div className="col-lg-6">
    						<div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
    							<h3 className="text-white m0">Comienza tu <span>Viaje<img src="/images/lazy.svg" data-src="/images/shape/title_shape_06.svg" alt="" className="lazy-img" /></span> Como Agente Inmobiliario.</h3>
    						</div>

    					</div>
    					<div className="col-lg-6">
    						<div className="form-wrapper me-auto ms-auto me-lg-0">
    							<form action="#">
    								<input type="email" placeholder="Correo electrónico" />
    								<button>Comenzar</button>
    							</form>
    							<div className="fs-16 mt-10 text-white">¿Ya eres Agente? <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Inicia sesión.</a></div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>






    		<div className="footer-four position-relative z-1">
    			<div className="container container-large">
    				<div className="bg-wrapper position-relative z-1">
    					<div className="row">
    						<div className="col-xxl-3 col-lg-4 mb-60">
    							<div className="footer-intro">
    								<div className="logo mb-20">
    									<a href="/">
    										<img src="/images/logo/logo.svg" alt="" />
    									</a>
    								</div> 

    								<p className="mb-30 xs-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, Estados Unidos</p>
    								<a href="#" className="email tran3s mb-60 md-mb-30">hello@homerealestate.com</a>
    								<ul className="style-none d-flex align-items-center social-icon">
    									<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-3 col-sm-4 ms-auto mb-30">
    							<div className="footer-nav ps-xl-5">
    								<h5 className="footer-title">Enlaces</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/">Inicio</a></li>
    									<li><a href="/dashboard/membership" target="_blank" rel="noopener noreferrer">Membresía</a></li>
    									<li><a href="/about_us_01">Sobre la Empresa</a></li>
    									<li><a href="/blog_01">Blog</a></li>
    									<li><a href="/blog_02">Explorar Carreras</a></li>
    									<li><a href="/pricing_02">Precios</a></li>
    									<li><a href="/dashboard/dashboard-index" target="_blank" rel="noopener noreferrer">Panel de Control</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-3 col-sm-4 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title">Legal</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/faq">Términos y condiciones</a></li>
    									<li><a href="/faq">Cookies</a></li>
    									<li><a href="/faq">Política de privacidad</a></li>
    									<li><a href="/faq">Preguntas Frecuentes</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-2 col-sm-4 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title">Nuevos Anuncios</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/listing_01">​Comprar Apartamentos</a></li>
    									<li><a href="/listing_02">Comprar Condominios</a></li>
    									<li><a href="/listing_03">Alquilar Casas</a></li>
    									<li><a href="/listing_04">Alquilar Industrial</a></li>
    									<li><a href="/listing_05">Comprar Villas</a></li>
    									<li><a href="/listing_06">Alquilar Oficina</a></li>
    								</ul>
    							</div>
    						</div>
    					</div>
    				</div>

    				<div className="bottom-footer">
    					<p className="m0 text-center fs-16">Copyright @2024 Home Real Estate.</p>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/assets/ils_06.svg" alt="" className="lazy-img shapes shape_01" />
    		</div> 




            <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="container">
                        <div className="user-data-form modal-content">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    						<div className="form-wrapper m-auto">
    							<ul className="nav nav-tabs w-100" role="tablist">
    								<li className="nav-item" role="presentation">
    									<button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab">Iniciar sesión</button>
    								</li>
    								<li className="nav-item" role="presentation">
    									<button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc2" role="tab">Registrarse</button>
    								</li>
    							</ul>
    							<div className="tab-content mt-30">
    								<div className="tab-pane show active" role="tabpanel" id="fc1">
    									<div className="text-center mb-20">
    										<h2>¡Bienvenido de nuevo!</h2>
    										<p className="fs-20 color-dark">¿Aún no tienes una cuenta? <a href="#">Regístrate</a></p>
    									</div>
    									<form action="#">
    										<div className="row">
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Correo electrónico*</label>
    													<input type="email" placeholder="Tuemail@gmail.com" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-20">
    													<label>Contraseña*</label>
    													<input type="password" placeholder="Ingresa tu contraseña" className="pass_log_id" />
    													<span className="placeholder_icon"><span className="passVicon"><img src="/images/icon/icon_68.svg" alt="" /></span></span>
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="agreement-checkbox d-flex justify-content-between align-items-center">
    													<div>
    														<input type="checkbox" id="remember" />
    														<label htmlFor="remember">Mantener sesión iniciada</label>
    													</div>
    													<a href="#">¿Olvidaste tu contraseña?</a>
    												</div> 
    											</div>
    											<div className="col-12">
    												<button className="btn-two w-100 text-uppercase d-block mt-20">Iniciar sesión</button>
    											</div>
    										</div>
    									</form>
    								</div>

    								<div className="tab-pane" role="tabpanel" id="fc2">
    									<div className="text-center mb-20">
    										<h2>Registrarse</h2>
    										<p className="fs-20 color-dark">¿Ya tienes una cuenta? <a href="#">Iniciar sesión</a></p>
    									</div>
    									<form action="#">
    										<div className="row">
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Nombre*</label>
    													<input type="text" placeholder="Zubayer Hasan" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Correo electrónico*</label>
    													<input type="email" placeholder="zubayerhasan@gmail.com" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-20">
    													<label>Contraseña*</label>
    													<input type="password" placeholder="Ingresa tu contraseña" className="pass_log_id" />
    													<span className="placeholder_icon"><span className="passVicon"><img src="/images/icon/icon_68.svg" alt="" /></span></span>
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="agreement-checkbox d-flex justify-content-between align-items-center">
    													<div>
    														<input type="checkbox" id="remember2" />
    														<label htmlFor="remember2">Al hacer clic en el botón "Registrarse", aceptas los <a href="#">Términos y condiciones</a> y la <a href="#">Política de privacidad</a></label>
    													</div>
    												</div> 
    											</div>
    											<div className="col-12">
    												<button className="btn-two w-100 text-uppercase d-block mt-20">Registrarse</button>
    											</div>
    										</div>
    									</form>
    								</div>

    							</div>

    							<div className="d-flex align-items-center mt-30 mb-10">
    								<div className="line"></div>
    								<span className="pe-3 ps-3 fs-6">O</span>
    								<div className="line"></div>
    							</div>
    							<div className="row">
    								<div className="col-sm-6">
    									<a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
    										<img src="/images/icon/google.png" alt="" />
    										<span className="ps-3">Registrarse con Google</span>
    									</a>
    								</div>
    								<div className="col-sm-6">
    									<a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
    										<img src="/images/icon/facebook.png" alt="" />
    										<span className="ps-3">Registrarse con Facebook</span>
    									</a>
    								</div>
    							</div>
    						</div>

                        </div>

                    </div>
                </div>
            </div>



    		<button className="scroll-top">
    			<i className="bi bi-arrow-up-short"></i>
    		</button>































    	</div>
    </TemplatePageShell>
  );
}