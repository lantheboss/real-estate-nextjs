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





            <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="modal-content d-flex justify-content-center">
                        <form action="#">
                            <input type="text" placeholder="Comprar Apartamentos, Alquilar Condominios, Vender Casas" />
                            <button><i className="fa-light fa-arrow-right-long"></i></button>
                        </form>
                    </div>
                </div>
            </div>




    		<header className="theme-main-menu menu-overlay menu-style-six sticky-menu">
    			<div className="inner-content gap-two">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo.svg" alt="" />
    							</a>
    						</div>

    						<div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
    							<ul className="d-flex align-items-center style-none">
    								<li className="d-none d-md-inline-block me-4">
                                        <a href="/dashboard/add-property" className="btn-ten rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Anuncio</span> <i className="bi bi-arrow-up-right"></i></a>
                                    </li>
    								<li>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="login-btn-two rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="fa-regular fa-lock"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#searchModal" className="search-btn-one rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="bi bi-search"></i></a>
                                    </li>
    							</ul>
    						</div>
    						<nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
    							<button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
    								data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    								aria-label="Toggle navigation">
    								<span></span>
    							</button>
    							<div className="collapse navbar-collapse ms-xl-5" id="navbarNav">
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
    															<li><a href="/listing_09" className="dropdown-item"><span>Cuadrícula con Filtro de Banner-1</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Tipo de Anuncio</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_11" className="dropdown-item"><span>Cuadrícula con Filtro de Banner-2</span></a></li>
    															<li><a href="/listing_10" className="dropdown-item"><span>Lista con Filtro de Banner-1</span></a></li>
    															<li><a href="/listing_12" className="dropdown-item"><span>Lista con Filtro de Banner-2</span></a></li>
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
    											<li><a href="/blog_01" className="dropdown-item"><span>Blog en Cuadrícula</span></a></li>
    											<li><a href="/blog_02" className="dropdown-item"><span>Blog en Lista</span></a></li>
    											<li><a href="/blog_03" className="dropdown-item"><span>Blog 2 columnas</span></a></li>
    											<li><a href="/blog_details" className="dropdown-item"><span>Detalles del Blog</span></a></li>
    										</ul>
    									</li>
    									<li className="d-md-none ps-2 pe-2 mt-20">
    										<a href="/dashboard/add-property" className="btn-ten w-100 rounded-0" target="_blank" rel="noopener noreferrer"><span>Añadir Anuncio</span> <i className="bi bi-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="inner-banner-two inner-banner z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative" style={{ backgroundImage: "url(images/media/img_49.jpg)" }}>
    			<div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-35 xl-mb-20 pt-15">Nuestros Servicios</h3>
                            <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                                <li><a href="/">Inicio</a></li>
                                <li>/</li>
                                <li>Servicios</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <p className="sub-heading">¡Más de 745,000 anuncios, apartamentos, lotes y terrenos disponibles ahora!</p>
                        </div>
                    </div>
    			</div>
    		</div>






    		<div className="block-feature-eleven mt-150 xl-mt-100">
    			<div className="container container-large">
    				<div className="row">
    					<div className="col-lg-5">
    						<div className="title-one md-mb-40">
                                <h3>1,230+ <span>Empresas <img src="/images/lazy.svg" data-src="/images/shape/title_shape_10.svg" alt="" className="lazy-img" /></span>Confían en nosotros.</h3>
                            </div>

    					</div>
    					<div className="col-xxl-6 col-lg-7 ms-auto">
    						<p className="fs-24 lh-lg mb-30 color-dark">Tu principal defensor inmobiliario, transformando casas en sueños. Confía en nosotros para guiarte a casa con experiencia. 745,000 apartamentos y casas en venta, alquiler e hipoteca.</p>
                            <div className="d-inline-flex flex-wrap align-items-center">
                                <a href="/about_us_02" className="btn-five md rounded-0 mt-20 me-5"><span>Más Detalles</span></a>
                                <a href="/contact" className="btn-three mt-20"><span>Solicitar una Llamada</span> <i className="fa-light fa-arrow-right-long"></i></a>
                            </div>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="partner-section-two mt-100 lg-mt-80">
    			<div className="container container-large">
    				<div className="wrapper bottom-border pb-55 lg-pb-40">
    					<div className="partner-logo-two">
                            <div className="item"><img src="/images/logo/p_logo_07.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_08.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_09.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_10.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_11.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_12.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_09.png" alt="" /></div>
                        </div>
    				</div>
    			</div>
    		</div>




    		<div className="block-feature-seven position-relative z-1 mt-150 xl-mt-120 lg-mt-100">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="text-center wow fadeInUp">
    						<div className="title-one">
                                <h3><span>Estamos Aquí <img src="/images/lazy.svg" data-src="/images/shape/title_shape_10.svg" alt="" className="lazy-img" /></span>para ayudarte</h3>
                                <p className="fs-22 mt-xs">Explora propiedades destacadas en venta.</p>
                            </div>

    					</div>

    					<div className="wrapper position-relative z-1 mt-45 lg-mt-20 mb-100 lg-mb-50">
    						<div className="row gx-xxl-5">
    							<div className="col-lg-4 col-md-6 wow fadeInUp">
    								<div className="card-style-two overflow-hidden position-relative z-1 mt-30">
    									<img src="/images/lazy.svg" data-src="/images/media/img_19.jpg" alt="" className="lazy-img w-100 tran5s" />
    									<div className="content text-center">
                                            <div className="btn-line tran3s fw-500 text-uppercase">COMPRAR PROPIEDAD</div>
    										<h4 className="mt-15 mb-35">Explora Hogares y Compra</h4>
    										<a href="/listing_02" className="btn-four rounded-circle m-auto"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    								<div className="card-style-two overflow-hidden position-relative z-1 mt-30">
    									<img src="/images/lazy.svg" data-src="/images/media/img_20.jpg" alt="" className="lazy-img w-100 tran5s" />
    									<div className="content text-center">
                                            <div className="btn-line tran3s fw-500 text-uppercase">ALQUILAR PROPIEDAD</div>
    										<h4 className="mt-15 mb-35">Publica y Vende Rápidamente</h4>
    										<a href="/listing_02" className="btn-four rounded-circle m-auto"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
    								<div className="card-style-two overflow-hidden position-relative z-1 mt-30">
    									<img src="/images/lazy.svg" data-src="/images/media/img_21.jpg" alt="" className="lazy-img w-100 tran5s" />
    									<div className="content text-center">
                                            <div className="btn-line tran3s fw-500 text-uppercase">VENDER PROPIEDAD</div>
    										<h4 className="mt-15 mb-35">Descubre y Obtén Alquiler</h4>
    										<a href="/listing_02" className="btn-four rounded-circle m-auto"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    						</div>
    					</div>

    				</div>
    			</div>
    		</div>





    		<div className="block-feature-seventeen dark-bg position-relative z-1 pt-120 xl-pt-80 pb-140 xl-pb-80">
    			<div className="container">
    				<div className="row">
    					<div className="col-xl-8 m-auto">
    						<div className="title-one text-center wow fadeInUp mb-40 lg-mb-20">
    							<h3 className="text-white">Servicios <span>Principales<img src="/images/lazy.svg" data-src="/images/shape/title_shape_07.svg" alt="" className="lazy-img" /></span></h3>
    							<p className="fs-22 color-dark text-white">Más de 745K anuncios de apartamentos, lotes y terrenos, disponibles hoy.</p>
    						</div>

    					</div>
    				</div>
    				<div className="row gx-xxl-5">
    					<div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_69.svg" alt="" className="lazy-img" /></div>
                                <h6>Comprar una casa</h6>
                                <p>Explora los más de 2 millones de hogares de Home Real Estate y descubre tu espacio ideal para vivir.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Comprar Casa</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_70.svg" alt="" className="lazy-img" /></div>
                                <h6>Alquilar una Casa</h6>
                                <p>Descubre un alquiler que te encantará en Home Real Estate, gracias a más de 35 filtros.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Alquilar Casa</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_71.svg" alt="" className="lazy-img" /></div>
                                <h6>Vender Casa</h6>
                                <p>Publica, vende y prospera con nuestra agencia inmobiliaria de primer nivel.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Vender Casa</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_69.svg" alt="" className="lazy-img" /></div>
                                <h6>Hipoteca</h6>
                                <p>Explora los más de 2 millones de hogares de Home Real Estate y descubre tu espacio ideal para vivir.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Comprar Casa</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_70.svg" alt="" className="lazy-img" /></div>
                                <h6>Consultoría</h6>
                                <p>Descubre un alquiler que te encantará en Home Real Estate, gracias a más de 35 filtros.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Alquilar Casa</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_71.svg" alt="" className="lazy-img" /></div>
                                <h6>Administración de Propiedades</h6>
                                <p>Publica, vende y prospera con nuestra agencia inmobiliaria de primer nivel.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Vender Casa</a>
                            </div>

                        </div>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_75.svg" alt="" className="lazy-img shapes shape_01" />
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_76.svg" alt="" className="lazy-img shapes shape_02" />
    		</div>





    		<div className="block-feature-ten mt-170 xl-mt-120 md-mt-100 mb-150 xl-mb-100">
    			<div className="container container-large">
    				<div className="row">
    					<div className="col-xxl-5 col-lg-6 ms-auto order-lg-last wow fadeInRight">
    						<div className="pb-45">
    							<div className="title-one mb-70 lg-mb-50">
                                    <div className="upper-title">Por qué nosotros</div>
    								<h3>Encuentra tu Casa Soñada Fácilmente.</h3>
    							</div>

                                <div className="accordion accordion-style-one top-bottom-line p0 mb-80 lg-mb-50" id="accordionOne">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Búsqueda Avanzada
                                            </button>
                                          </h2>
                                          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionOne">
                                            <div className="accordion-body">
                                                <p>Solo toma 5 minutos. La configuración es rápida y sencilla, con filtros totalmente personalizables al adecuado.</p>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Agentes Expertos para cualquier ayuda
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                            <div className="accordion-body">
                                                <p>Solo toma 5 minutos. La configuración es rápida y sencilla, con filtros totalmente personalizables al adecuado.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                Pagos protegidos, en todo momento
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                            <div className="accordion-body">
                                                <p>Solo toma 5 minutos. La configuración es rápida y sencilla, con filtros totalmente personalizables al adecuado.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    							<a href="/contact" className="btn-five rounded-0">Contáctanos</a>
    						</div>
    					</div>
    					<div className="col-lg-6">
    						<div className="media-gallery position-relative z-1 h-100 wow fadeInLeft">
    							<div className="bg" style={{ backgroundImage: "url(images/media/img_56.jpg)" }}>
    								<div className="card-style-three p0">
    									<div className="bg-wrapper text-center">
    										<h3>07+</h3>
    										<p>Años de Experiencia <br />con orgullo.</p>
    									</div>
    								</div>
    								<img src="/images/lazy.svg" data-src="/images/assets/screen_05.jpg" alt="" className="lazy-img screen_01" />
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
    							<h3 className="text-white m0">Comienza tu <span>Viaje<img src="/images/lazy.svg" data-src="/images/shape/title_shape_06.svg" alt="" className="lazy-img" /></span> Como Minorista.</h3>
    						</div>

    					</div>
    					<div className="col-lg-6">
    						<div className="form-wrapper me-auto ms-auto me-lg-0">
    							<form action="#">
    								<input type="email" placeholder="Correo electrónico" className="rounded-0" />
    								<button className="rounded-0">Comenzar</button>
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
    									<li><a href="/about_us_01">Sobre la Compañía</a></li>
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
    									<li><a href="/listing_06">Alquilar Oficinas</a></li>
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
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    						<div className="form-wrapper m-auto">
    							<ul className="nav nav-tabs w-100" role="tablist">
    								<li className="nav-item" role="presentation">
    									<button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab">Iniciar Sesión</button>
    								</li>
    								<li className="nav-item" role="presentation">
    									<button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc2" role="tab">Registrarse</button>
    								</li>
    							</ul>
    							<div className="tab-content mt-30">
    								<div className="tab-pane show active" role="tabpanel" id="fc1">
    									<div className="text-center mb-20">
    										<h2>¡Bienvenido de Nuevo!</h2>
    										<p className="fs-20 color-dark">¿Aún no tienes una cuenta? <a href="#">Regístrate</a></p>
    									</div>
    									<form action="#">
    										<div className="row">
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Correo electrónico*</label>
    													<input type="email" placeholder="Youremail@gmail.com" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-20">
    													<label>Contraseña*</label>
    													<input type="password" placeholder="Ingresa la contraseña" className="pass_log_id" />
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
    												<button className="btn-two w-100 text-uppercase d-block mt-20">Iniciar Sesión</button>
    											</div>
    										</div>
    									</form>
    								</div>

    								<div className="tab-pane" role="tabpanel" id="fc2">
    									<div className="text-center mb-20">
    										<h2>Registrarse</h2>
    										<p className="fs-20 color-dark">¿Ya tienes una cuenta? <a href="#">Iniciar Sesión</a></p>
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
    													<input type="password" placeholder="Ingresa la contraseña" className="pass_log_id" />
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